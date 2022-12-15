import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalInstrumentServiceService {

   constructor(public http:HttpClient ) { }

   addLegalInstrument():Observable<any>{
     return this.http.post('http://localhost:9090/legalInstruments', {
      "detail":"registro uno con asignacion",
      "rights":"derechos",
      "plaintiffsRequest":"peticiones_del_accionante",
      "fundamentalsMinistryLaw":"fundamentos_de_ley_ministerio",
      "ministryRequest":"peticiones_del_ministerio",
      "notifications":"notificaciones",
      "anexos":"anexos",
      "idTypeInstrument":2,
      "idMicroenterprise":1
     },{responseType: 'text'})
   }

}
