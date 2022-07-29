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

export enum FilterType {
  Range,
  CloseList,
  Term
}
