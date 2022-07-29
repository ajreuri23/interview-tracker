import { Injectable } from '@angular/core';
import {Company, CompanyResponse} from 'src/app/interfaces';
import { HttpHandlerService } from '../http-handler/http-handler.service';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyManagerService {
  private readonly SERVER_URL: string = 'http://localhost:3000';
  private readonly COMPANY_PATH: string = '/company';
  public $companies: Subject<CompanyResponse> = new Subject<CompanyResponse>();

  constructor(private httpHandler: HttpHandlerService) { }

  public async getAllCompanies(): Promise<void> {
    try {
      const companies: CompanyResponse = await this.httpHandler.getRequest<CompanyResponse>(`${this.SERVER_URL}${this.COMPANY_PATH}`);
      this.$companies.next(companies);
    } catch (err) {
      console.error('Cant fetch companies');
    }
  }

  public async addOrUpdateCompany(company: Company): Promise<Company> {
    try {
      const updatedCompany: Company = await this.httpHandler.postRequest<Company>(`${this.SERVER_URL}${this.COMPANY_PATH}`, company);
      return updatedCompany;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
