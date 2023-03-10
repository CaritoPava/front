import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Microenterprise } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MicroenterpriseServiceService {

   private url:string = 'http://localhost:9090/microenterprises';

  constructor(public http:HttpClient ) { }

  getMicroenterprises():Observable<any>{
    return this.http.get(`${this.url}`);
  }
}
