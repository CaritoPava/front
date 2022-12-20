import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegalInstrument, LegalInstrumentComplete, LegalInstrumentUpdate,ResponseMessage } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LegalInstrumentServiceService {

  private url:string = 'http://localhost:9090';
  private idEmployee:number = 22;

   constructor(public http:HttpClient ) { }

   getLegalInstrumentsByResponsable():Observable<any>{
      return this.http.get(`${this.url}/legalInstruments/employee/${this.idEmployee}`);
    }

    getLegalInstrumentById(idLegalInstrument:number):Observable<LegalInstrumentComplete>{
      return this.http.get<LegalInstrumentComplete>(`${this.url}/legalInstruments/${idLegalInstrument}`);
    }

   addLegalInstrument(legalInstrument:LegalInstrument):Observable<ResponseMessage>{
     return this.http.post<ResponseMessage>(`${this.url}/legalInstruments`,legalInstrument)
   }

    updateLegalInstrument(idLegalInstrument:number,legalInstrument:LegalInstrumentUpdate):Observable<any>{
      return this.http.put(`${this.url}/legalInstruments/${idLegalInstrument}`,legalInstrument)
    }






}
