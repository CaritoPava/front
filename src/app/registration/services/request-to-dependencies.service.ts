import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestToDependencie, RequestToDependencieResponse, RequestToDependencieUpdate } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestToDependenciesService {

  private url:string = 'http://localhost:9090';

  constructor(public http:HttpClient ) { }

  getRequestsByDependencieAndLegalInstrument(idDependencie:number, idLegalInstrument:number):Observable<RequestToDependencieResponse[]>{
    return this.http.get<RequestToDependencieResponse[]>(`${this.url}/requesttodependencie/${idDependencie}/legalInstrument/${idLegalInstrument}`);
  }


  addRequestToDependencies(request:RequestToDependencie):Observable<any>{
    return this.http.post(`${this.url}/requesttodependencie`,request )
  }

  updateRequestToDependencies(idRequest:number, request:RequestToDependencieUpdate):Observable<any>{
    return this.http.put(`${this.url}/requesttodependencie/${idRequest}`,request)
  }

  getRequestsByLegalInstrument(idLegalInstrument:number):Observable<RequestToDependencieResponse[]>{
    return this.http.get<RequestToDependencieResponse[]>(`${this.url}/requesttodependencie/legalInstrument/${idLegalInstrument}`);
  }


}
