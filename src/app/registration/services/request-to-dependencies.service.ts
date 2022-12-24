import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestToDependencie, RequestToDependencieResponse, RequestToDependencieUpdate } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestToDependenciesService {

  private baseURL:String = environment.urlApiGeneral;

  constructor(public http:HttpClient ) { }

  getRequestsByDependencieAndLegalInstrument(idDependencie:number, idLegalInstrument:number):Observable<RequestToDependencieResponse[]>{
    return this.http.get<RequestToDependencieResponse[]>(`${this.baseURL}/requesttodependencie/${idDependencie}/legalInstrument/${idLegalInstrument}`);
  }

  getRequestById(idRequest:number):Observable<RequestToDependencieResponse>{
    return this.http.get<RequestToDependencieResponse>(`${this.baseURL}/requesttodependencie/${idRequest}`);
  }

  getRequestsByLegalInstrument(idLegalInstrument:number):Observable<RequestToDependencieResponse[]>{
    return this.http.get<RequestToDependencieResponse[]>(`${this.baseURL}/requesttodependencie/legalInstrument/${idLegalInstrument}`);
  }

  getRequestByIdEmployee(idEmployee:number):Observable<RequestToDependencieResponse[]>{
    return this.http.get<RequestToDependencieResponse[]>(`${this.baseURL}/requesttodependencie/employee/${idEmployee}`);
  }
  addRequestToDependencies(request:RequestToDependencie):Observable<any>{
    return this.http.post(`${this.baseURL}/requesttodependencie`,request )
  }

  updateRequestToDependencies(idRequest:number, request:RequestToDependencieUpdate):Observable<any>{
    return this.http.put(`${this.baseURL}/requesttodependencie/${idRequest}`,request)
  }


}
