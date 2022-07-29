import { Component, Input, OnInit } from '@angular/core';
import {Company} from 'src/app/interfaces';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddCompanyDialog} from "../add-company/add-company-dialog.component";
import {CompanyManagerService} from "../../services/company-manager/company-manager.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;

  constructor(private editCompanyDialog: MatDialog, private companyManager: CompanyManagerService) {}

  ngOnInit(): void {}

  editCompany() {
    const dialogRef: MatDialogRef<AddCompanyDialog> = this.editCompanyDialog.open(AddCompanyDialog, {
      width: '600px',
      data: this.company
    });

    dialogRef.afterClosed().subscribe(() => this.companyManager.getAllCompanies());
  }
}
