import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Company, CompanyConstructor, RawCompanyData} from "../../interfaces";
import {CompanyManagerService} from "../../services/company-manager/company-manager.service";
import {City, CompanyType, JobType, StatusStage, StatusTiming, StatusType, WorkModelType} from "../../enums";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.scss']
})
export class AddCompanyDialog implements OnInit {
  public company: RawCompanyData;
  public workModels = Object.entries(WorkModelType);;
  public statusTimings = Object.entries(StatusTiming);
  public statusStages = Object.entries(StatusStage);
  public statusTypes = Object.entries(StatusType);
  public cities = Object.entries(City);
  public companyTypes = Object.entries(CompanyType);
  public jobTypes = Object.entries(JobType);

  constructor(public dialogRef: MatDialogRef<AddCompanyDialog>, @Inject(MAT_DIALOG_DATA) public data: Company,
              private companyManager: CompanyManagerService) { }

  ngOnInit(): void {
    this.company = {
      address: this.data?.location?.address ?? undefined,
      amountOfDaysOnSite: this.data?.workModel?.amountOfDaysOnSite ?? undefined,
      city: this.data?.location?.city ?? undefined,
      companyType: this.data?.companyType ?? undefined,
      description: this.data?.description ?? undefined,
      jobType: this.data?.jobType ?? undefined,
      latitude: this.data?.location?.latitude ?? undefined,
      longitude: this.data?.location?.longitude ?? undefined,
      statusDate: this.data?.status?.date ?? undefined,
      statusStage: this.data?.status?.stage ?? undefined,
      statusTiming: this.data?.status?.timing ?? undefined,
      statusType: this.data?.status?.type ?? undefined,
      technologies: this.data?.technologies ?? undefined,
      timeToGetInMinutes: this.data?.timeToGetInMinutes ?? undefined,
      workModelType: this.data?.workModel?.type ?? undefined,
      workerAmount: this.data?.workerAmount ?? undefined,
      name: this.data?.name ?? undefined
    }
  }

  async addCompany() {
    try {
      const company: Company = CompanyConstructor.getCompany(this.company);

      await this.companyManager.addOrUpdateCompany(company);
      this.dialogRef.close(this.company);
    } catch (e) {
      this.dialogRef.close(null);
    }
  }

  matSelectChange($event: MatSelectChange) {
    console.log($event);
  }
}
