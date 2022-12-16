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

