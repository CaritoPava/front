import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Dependencie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DependenciesService {

private baseURL:String = environment.urlApiGeneral

  constructor(public http:HttpClient ) { }

  getDependencies():Observable<Dependencie[]>{
    return this.http.get<Dependencie[]>(`${this.baseURL}/dependencies`);
  }

}
