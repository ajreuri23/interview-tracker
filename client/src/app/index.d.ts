export enum JobType {
    FullStack = 'Full Stack',
    BackEnd = 'Back End'
}

export enum CompanyType {
    Startup = 'Startup',
    Intermediate = 'Intermediate',
    Big = 'Big',
    Corporate = 'Corporate'
}

export enum StatusType {
    Freeze = 'Freeze',
    Rejected = 'Rejected',
    InProgress = 'In Progress',
    DidntWant = 'Didnt Want'
}

export enum StatusStage {
    Apply = 'Apply',
    HR = 'HR',
    firstInterview = '1st Technical Interview',
    secondInterview = '2nd Technical Interview',
    Meetup = 'HR Meetup',
    Contract = 'Contract'
}

export enum StatusTiming {
    After = 'After',
    WaitingFor = 'Waiting For'
}

export enum City {
    TelAviv = 'Tel Aviv',
    Netanya = 'Netanya',
    Herzliya = 'Herzliya',
    HodHasharon = 'Hod Hasharon',
    KefarSava = 'Kefar Sava',
    PetahTikva = 'Petah Tikva',
}

export enum WorkModelType {
    OnSite = 'On Site',
    Hybrid = 'Hybrid',
    Remote = 'Remote'
}

export interface WorkModel {
    type: WorkModelType;
    amountOfDaysOnSite: number;
}

export interface Status {
    type: StatusType;
    stage: StatusStage;
    timing: StatusTiming;
    date: Date;
}

export interface Location {
    city: City;
    longitude: number;
    latitude: number;
    address: string;
}

export interface Funding {
    fundingWave: number;
    amountFundedInUsd: number;
}

export interface Contract {
    moneyBruto: number;
    vacationDays: number;
    moneyNeto: number;
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

export interface CompanyResponse {
    data: Company[];
    filters: Filter[];
}

export enum FilterType {
    Range,
    CloseList,
    Term
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
