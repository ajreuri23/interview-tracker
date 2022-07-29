import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  constructor() { }

  public async getRequest<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(url);
      return response?.data;
    } catch (err) {
      throw new Error(`Fetching ${url} failed `);
    }
  }

  public async postRequest<T>(url: string, body: T): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(url, body);
      return response?.data;
    } catch (err) {
      throw new Error(`Fetching ${url} failed `);
    }
  }
}
