import { Injectable } from '@angular/core';
import { Company } from 'src/app';
import axios from 'axios';
import { HttpHandlerService } from '../http-handler/http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagerService {
  private readonly SERVER_URL: string = 'http://localhost:3000';
  private readonly COMPANY_PATH: string = '/company';

  constructor(private httpHandler: HttpHandlerService) { }

  public async getAllCompanies(): Promise<Company[]> {
    try {
      const companies: Company[] = await this.httpHandler.getRequest<Company[]>(`${this.SERVER_URL}${this.COMPANY_PATH}`);
      return companies;
    } catch (err) {
      console.error('Cant fetch companies');
      return [];
    }
  }
}
