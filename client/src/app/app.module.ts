import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFiltersComponent } from './components/company-filters/company-filters.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CloseListFilterComponent } from './components/company-filters/close-list-filter/close-list-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from "@angular/material/button";
import {AddCompanyDialog} from "./components/add-company/add-company-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyListComponent,
    CompanyFiltersComponent,
    CompaniesComponent,
    CloseListFilterComponent,
    AddCompanyDialog
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
