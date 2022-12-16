import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesLegalInstrumentServiceService {

  private url:string = 'http://localhost:9090/typesinstruments';

  constructor(public http:HttpClient ) { }

  getMicroenterprises():Observable<any>{
    return this.http.get(`${this.url}`);
  }
}
