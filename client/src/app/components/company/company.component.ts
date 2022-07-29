import { Component, Input, OnInit } from '@angular/core';
import {Company} from 'src/app/interfaces';
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyDialog} from "../add-company/add-company-dialog.component";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;

  constructor(private editCompanyDialog: MatDialog) {}

  ngOnInit(): void {}

  editCompany() {
    this.editCompanyDialog.open(AddCompanyDialog, {
      width: '600px',
      data: this.company
    });
  }
}
