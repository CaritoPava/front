import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegalInstrument } from '../interfaces/interfaces';

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

   addLegalInstrument(legalInstrument:LegalInstrument):Observable<any>{
     return this.http.post(`${this.url}/legalInstruments`,legalInstrument, {responseType: 'json'})
   }




}
