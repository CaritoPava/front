import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../../registration/interfaces/interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.urlApiGeneral;

  private _employee:Employee | undefined;

 get employee(){
    return {...this._employee};
 }

  constructor(private http: HttpClient) { }


  login(id:number){
    const url = `${this.baseUrl}/employees/${id}`;
    return this.http.get<Employee>(url)
    .pipe(
      tap( resp => this._employee = resp)
    );
  }
}
