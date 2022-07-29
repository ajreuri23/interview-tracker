import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Company} from "../../interfaces";
import {CompanyManagerService} from "../../services/company-manager/company-manager.service";
import {City, CompanyType, JobType, StatusStage, StatusTiming, StatusType, WorkModelType} from "../../enums";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.scss']
})
export class AddCompanyDialog implements OnInit {
  public company: Company;
  public workModels = Object.entries(WorkModelType);;
  public statusTimings = Object.entries(StatusTiming);
  public statusStages = Object.entries(StatusStage);
  public statusTypes = Object.entries(StatusType);
  public cities = Object.entries(City);
  public companyTypes = Object.entries(CompanyType);
  public jobTypes = Object.entries(JobType);

  public jobType: JobType;
  public companyType: CompanyType;
  public city: City | undefined;
  public statusType: StatusType | undefined;
  public workModel: WorkModelType | undefined;
  public statusTiming: StatusTiming | undefined;
  public statusStage: StatusStage | undefined;

  constructor(public dialogRef: MatDialogRef<AddCompanyDialog>, @Inject(MAT_DIALOG_DATA) public data: Company,
              private companyManager: CompanyManagerService) { }

  ngOnInit(): void {
    this.company = this.data;
    this.jobType = this.company.jobType;
    this.companyType = this.company.companyType;
    this.statusStage = this.company.status?.stage;
    this.statusTiming = this.company.status?.timing;
    this.statusType = this.company.status?.type;
    this.workModel = this.company.workModel?.type;
    this.city = this.company.location?.city;
  }

  async addCompany() {
    try {
      this.company.status = {
        type: this.statusType,
        date: this.company.status?.date,
        stage: this.statusStage,
        timing: this.statusTiming
      };
      this.company.location = {
        city: this.city,
        longitude: this.company.location?.longitude,
        latitude: this.company.location?.latitude,
        address: this.company.location?.address
      };
      this.company.workModel = {
        type: this.workModel,
        amountOfDaysOnSite: this.company.workModel?.amountOfDaysOnSite
      }
      this.company.jobType = this.jobType;
      this.company.companyType = this.companyType;


      await this.companyManager.addOrUpdateCompany(this.company);
      this.dialogRef.close(this.company);
    } catch (e) {
      this.dialogRef.close(null);
    }
  }

  matSelectChange($event: MatSelectChange) {
    console.log($event);
  }
}
