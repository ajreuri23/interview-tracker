export class Company {
    name: string;
    jobType: JobType;
    companyType: CompanyType;
    workerAmount?: BigInteger;
    location?: Location;
    timeToGetInMinutes?: BigInteger;
    technologies?: string[];
    status: Status;
    contract?: Contract;
    description?: string;
    funding?: Funding;
}

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

export interface WorkModel {
    type: WorkModelType;
    amountOfDaysOnSite?: BigInteger;
}

export enum WorkModelType {
    OnSite = 'On Site',
    Hybrid = 'Hybrid',
    Remote = 'Remote'
};

export interface Location {
    city: City;
    coordinates: [number, number];
}

export enum City {
    TelAviv = 'Tel Aviv',
    Netanya = 'Netanya',
    Herzliya = 'Herzliya',
    HodHasharon = 'Hod Hasharon',
    KefarSava = 'Kefar Sava',
    PetahTikva = 'Petah Tikva',
}

export interface Status {
    status: StatusType;
    stage: StatusStage;
    timing: StatusTiming;
    date: Date;
}

export interface Contract {
    moneyBruto: number;
    vacationDays: BigInteger;
    moneyNeto: number;
}

export interface Funding {
    fundingWave: BigInteger;
    amountFundedInUsd: number;
}

export type StatusType = 'Freeze' | 'Rejected' | 'In Progress' | 'Didnt Want';
export type StatusStage = 'Apply' | 'HR' | '1st Technical Interview' | '2nd Technical Interview' | 'HR Meetup' | 'Contract';
export type StatusTiming = 'After' | 'Waiting For';
