import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app';
import { CompanyManagerService } from 'src/app/services/company-manager/company-manager.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  public companies: Company[] = [];

  constructor(private companyManager: CompanyManagerService) {
  }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  private async fetchCompanies() {
    this.companies = await this.companyManager.getAllCompanies();
  }
}
