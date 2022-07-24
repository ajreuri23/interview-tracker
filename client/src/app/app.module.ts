import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFiltersComponent } from './components/company-filters/company-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyListComponent,
    CompanyFiltersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
