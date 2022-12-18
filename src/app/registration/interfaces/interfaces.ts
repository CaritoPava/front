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



