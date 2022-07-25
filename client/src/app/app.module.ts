import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFiltersComponent } from './components/company-filters/company-filters.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CloseListFilterComponent } from './components/company-filters/close-list-filter/close-list-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyListComponent,
    CompanyFiltersComponent,
    CompaniesComponent,
    CloseListFilterComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
