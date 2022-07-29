import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Company} from "../../interfaces";
import {CompanyManagerService} from "../../services/company-manager/company-manager.service";
import {City, CompanyType, JobType, StatusStage, StatusTiming, StatusType, WorkModelType} from "../../enums";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.scss']
})
export class AddCompanyDialog implements OnInit {
  public company: Company;
  public workModels: any;
  public statusTimings = Object.entries(StatusTiming);
  public statusStages = Object.entries(StatusStage);
  public statusTypes = Object.entries(StatusType);
  public cities = Object.entries(City);
  public companyTypes = Object.entries(CompanyType);
  public jobTypes = Object.entries(JobType);

  constructor(public dialogRef: MatDialogRef<AddCompanyDialog>, @Inject(MAT_DIALOG_DATA) public data: Company,
              private companyManager: CompanyManagerService) { }

  ngOnInit(): void {
    this.company = this.data;
    this.workModels = Object.entries(WorkModelType);
  }

  async addCompany() {
    try {
      await this.companyManager.addOrUpdateCompany(this.company);
      this.dialogRef.close(this.company);
    } catch (e) {
      this.dialogRef.close(null);
    }
  }
}
