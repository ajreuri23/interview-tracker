import { Injectable } from '@angular/core';
import { Company, CompanyResponse } from 'src/app';
import { HttpHandlerService } from '../http-handler/http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagerService {
  private readonly SERVER_URL: string = 'http://localhost:3000';
  private readonly COMPANY_PATH: string = '/company';

  constructor(private httpHandler: HttpHandlerService) { }

  public async getAllCompanies(): Promise<CompanyResponse> {
    try {
      const companies: CompanyResponse = await this.httpHandler.getRequest<CompanyResponse>(`${this.SERVER_URL}${this.COMPANY_PATH}`);
      return companies;
    } catch (err) {
      console.error('Cant fetch companies');
      throw err;
    }
  }
}
