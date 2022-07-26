import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Company} from "../../index";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.scss']
})
export class AddCompanyDialog implements OnInit {
  public company: Partial<Company>;
  public companyForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCompanyDialog>, @Inject(MAT_DIALOG_DATA) public data: Partial<Company>) { }

  ngOnInit(): void {
    this.company = this.data;
    this.companyForm = new FormGroup({
      name: new FormControl(this.company.name, [Validators.required]),
      jobType: new FormControl(this.company.jobType, [Validators.required]),


    })
  }


}
