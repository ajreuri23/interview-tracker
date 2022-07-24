import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;

  constructor() {}

  ngOnInit(): void {}
}
