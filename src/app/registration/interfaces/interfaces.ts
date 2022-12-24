import { RequestToDependenciesService } from '../services/request-to-dependencies.service';
export interface LegalInstrument {
  rights:string;
  plaintiffsRequest:string;
  fundamentalsMinistryLaw:string;
  ministryRequest:string;
  notifications:string;
  anexos:string;
  idTypeInstrument:number;
  idMicroenterprise:number;
}

export interface ResponseMessage{
  message:string;
  code : string;
}

export interface Microenterprise {
  id_Microenterprise:number;
  nit:string;
  name:string;
  address:string;
  phone:string;
}

export interface TypesLegalInstrument {
  id_Type:number;
  name:string;
}

export interface StateLegalInstrument {
  id:number;
  name:string;
}

export interface Dependencie {
  id:number;
  name:string;
}

export interface Employee {
  id:number;
  document:number
  name:string;
  lastName:string;
  phone:string;
  dependencie: Dependencie
}
export interface LegalInstrumentComplete {
  id:number;
  filing:string;
  detail:string;
  rights:string;
  plaintiffsRequest:string;
  fundamentalsMinistryLaw:string;
  ministryRequest:string;
  notifications:string;
  anexos:string;
  companyRequest:string;
  basicsOfBusinessLaw:string;
  failed:string;
  contemptIncident:string;
  isActive:string;
  creationDate:string;
  typeInstrument: TypesLegalInstrument;
  microenterprise: Microenterprise;
  employeeResponsible: Employee;
  employeeChecked: Employee;
  stateLegalInstrument: StateLegalInstrument;
}

export interface LegalInstrumentUpdate {
  companyRequest?:string;
  basicsOfBusinessLaw?:string;
  failed?:string;
  contemptIncident?:string;
  stateLegalInstrument?:string;
}

export interface AnswerLegalInstrument {
  id:number;
  answer:string;
  date:string;
  idLegalInstrument: number;
}

export interface AnswerAdd {
  answer:string;
  idLegalInstrument: number;
}

export interface RequestToDependencie{
  request:string;
  idDependencie:number;
  idLegalInstrument:number;
  idStatus:number;
}

export interface RequestToDependencieResponse{
  id:number;
  request:string;
  response:string
  dependencie:string;
  idLegalInstrument:number;
  nameEmployee:string;
  status:string;
}

export interface RequestToDependencieUpdate{
  response:string;
  responseStatus:number;
}

export interface legalInstrumentForView {
  id:number;
  filing:string;
  detail:string;
  rights:string;
  plaintiffsRequest:string;
  fundamentalsMinistryLaw:string;
  ministryRequest:string;
  notifications:string;
  anexos:string;
  companyRequest: string;
  basicsOfBusinessLaw:string;
  failed: string;
  contemptIncident: string;
  isActive:string;
  creationDate:string;
  typeInstrument: string;
  microenterprise: string;
  employeeResponsible: string;
  employeeChecked: string;
  stateLegalInstrument: string
}

export interface ReportLegalInstrumentsByState {
  amount:number;
  name:string;
}


