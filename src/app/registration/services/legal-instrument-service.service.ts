import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegalInstrument } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LegalInstrumentServiceService {

  private url:string = 'http://localhost:9090';

   constructor(public http:HttpClient ) { }

   addLegalInstrument(legalInstrument:LegalInstrument):Observable<any>{
    console.log(legalInstrument);
    //capturar respuesta del servidor

     return this.http.post(`${this.url}/legalInstruments`,legalInstrument,     {responseType: 'json'})
   }




}
