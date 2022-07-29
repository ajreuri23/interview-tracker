import { Component, OnInit } from '@angular/core';
import {Company, Filter, OnFilterEvent} from 'src/app/interfaces';
import { CompanyManagerService } from 'src/app/services/company-manager/company-manager.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddCompanyDialog} from "../add-company/add-company-dialog.component";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  public companies: Company[];
  public filteredCompanies: Company[];
  public filters: Array<[string, Filter]>;

  constructor(private companyManager: CompanyManagerService, private addCompanyDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  private async fetchCompanies() {
    try {
      const companiesResponse: { data: Company[], filters: Filter[]} = await this.companyManager.getAllCompanies();
      this.companies = companiesResponse.data;
      this.filteredCompanies = this.companies;
      this.filters = Object.entries(companiesResponse.filters);
    } catch (err) {
      this.companies = [];
      this.filters = [];
    }
  }

  onNewFilter(allFilters: Map<string, (obj: any) => boolean>) {
    if (!allFilters || allFilters.size === 0) {
      this.filteredCompanies = this.companies;
      return;
    }

    this.filteredCompanies = [];
    const filterFunctions: Array<(obj: Company) => boolean> = [...allFilters.values()];
    for (let filterIndex = 0; filterIndex < allFilters.size; filterIndex++) {
      const filteredCompanies: Company[] = this.companies.filter((company) => filterFunctions[filterIndex](company));
      const relevantCompanies: Company[] = filteredCompanies.filter(company => !this.filteredCompanies.map(company => company.name).includes(company.name));
      this.filteredCompanies.push(...relevantCompanies);
    }
  }

  openAddCompanyDialog() {
    this.addCompanyDialog.open(AddCompanyDialog, {
      width: '600px'
    });
  }
}
