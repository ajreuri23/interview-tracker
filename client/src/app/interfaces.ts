import {City, CompanyType, FilterType, JobType, StatusStage, StatusTiming, StatusType, WorkModelType} from "./enums";

export interface WorkModel {
  type?: WorkModelType;
  amountOfDaysOnSite?: number;
}

export interface Status {
  type?: StatusType;
  stage?: StatusStage;
  timing?: StatusTiming;
  date?: Date;
}

export interface Location {
  city?: City;
  longitude?: number;
  latitude?: number;
  address?: string;
}

export interface Funding {
  fundingWave?: number;
  amountFundedInUsd?: number;
}

export interface Contract {
  moneyBruto?: number;
  vacationDays?: number;
  moneyNeto?: number;
}

export interface Company {
  name: string;
  jobType: JobType;
  companyType: CompanyType;
  workerAmount?: number;
  location?: Location;
  timeToGetInMinutes?: number;
  technologies?: string[];
  status?: Status;
  contract?: Contract;
  description?: string;
  funding?: Funding;
  workModel?: WorkModel;
}

export interface RawCompanyData {
  name: string;
  jobType: JobType;
  companyType: CompanyType;
  workerAmount?: number;
  city?: City;
  longitude?: number;
  latitude?: number;
  address?: string;
  timeToGetInMinutes?: number;
  technologies?: string[];
  statusType?: StatusType;
  statusTiming?: StatusTiming;
  statusStage?: StatusStage;
  statusDate?: Date;
  description?: string;
  workModelType?: WorkModelType;
  amountOfDaysOnSite?: number;
}

export class CompanyConstructor {
  static getCompany(company: RawCompanyData): Company {
    const companyObj: Company = {
      name: company.name,
      jobType: company.jobType,
      companyType: company.companyType,
      workerAmount: company.workerAmount,
      location: {
        city: company.city,
        longitude: company.longitude,
        latitude: company.latitude,
        address: company.address
      },
      timeToGetInMinutes: company.timeToGetInMinutes,
      technologies: company.technologies,
      status: {
        type: company.statusType,
        timing: company.statusTiming,
        stage: company.statusStage,
        date: company.statusDate ? new Date(company.statusDate) : undefined
      },
      description: company.description,
      workModel: {
        type: company.workModelType,
        amountOfDaysOnSite: company.amountOfDaysOnSite
      },
      contract: {
        moneyBruto: undefined,
        moneyNeto: undefined,
        vacationDays: undefined
      },
      funding: {
        fundingWave: undefined,
        amountFundedInUsd: undefined
      }
    };

    return companyObj;
  }
}

export interface CompanyResponse {
  data: Company[];
  filters: Filter[];
}

export interface Filter {
  type: FilterType;
}

export interface CloseListFilter extends Filter {
  options: string[];
}

export interface RangeFilter extends Filter {
  min: number;
  max: number;
}

export interface TermFilter extends Filter {
  searchTerm: string;
}

export interface OnFilterEvent {
  key: string;
  filterFunction: (obj: any) => boolean
}

export interface OnDeleteFilterEvent {
  key: string;
}
