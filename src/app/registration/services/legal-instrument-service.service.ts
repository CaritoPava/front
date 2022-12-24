import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LegalInstrument, LegalInstrumentComplete, LegalInstrumentUpdate, ResponseMessage } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LegalInstrumentServiceService {

  private baseURL:String = environment.urlApiGeneral

  constructor(public http:HttpClient ) { }

  getLegalInstrumentsByResponsable(idEmployee:number):Observable<any>{
      return this.http.get(`${this.baseURL}/legalInstruments/employee/${idEmployee}`);
  }

  getAllLegalInstruments():Observable<LegalInstrumentComplete[]>{
      return this.http.get<LegalInstrumentComplete[]>(`${this.baseURL}/legalInstruments`);
  }

  getLegalInstrumentById(idLegalInstrument:number):Observable<LegalInstrumentComplete>{
      return this.http.get<LegalInstrumentComplete>(`${this.baseURL}/legalInstruments/${idLegalInstrument}`);
  }

  addLegalInstrument(legalInstrument:LegalInstrument):Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>(`${this.baseURL}/legalInstruments`,legalInstrument)
  }

  updateLegalInstrument(idLegalInstrument:number,legalInstrument:LegalInstrumentUpdate):Observable<any>{
      return this.http.put(`${this.baseURL}/legalInstruments/${idLegalInstrument}`,legalInstrument)
  }

  deleteLegalInstrument(idLegalInstrument:number):Observable<any>{
      return this.http.delete(`${this.baseURL}/legalInstruments/${idLegalInstrument}`)
  }






}
