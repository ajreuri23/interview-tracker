import { Component, Input, OnInit } from '@angular/core';
import {Company} from 'src/app/interfaces';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  @Input() companies: Company[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
