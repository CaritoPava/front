import { Component } from '@angular/core';
import { RequestToDependenciesService } from '../../services/request-to-dependencies.service';
import { RequestToDependencieResponse } from '../../interfaces/interfaces';
import { LoginService } from '../../../login/services/login.service';


//puedo exportar e inportar enums

export enum Dependencie {
  'Investigaciones'= 1,
  'Juridica'= 2,
  'Financiera'= 21,
  'Verificaciones'= 22,
  'Radicaciones'= 23,
}

@Component({
  selector: 'app-assignmrnts-by-dependencie',
  templateUrl: './assignmrnts-by-dependencie.component.html',
  styleUrls: ['./assignmrnts-by-dependencie.component.css']
})
export class AssignmrntsByDependencieComponent {

  constructor(public requestToDependenciesService:RequestToDependenciesService,
    public loginService:LoginService){}


  get login (){
    return this.loginService.employee;
   }

  actuallyDependencie:number = Dependencie.Verificaciones
  actuallyIdEmployee:number = this.login.id || 0;


  request!:RequestToDependencieResponse
  requests!:RequestToDependencieResponse[]

  getRequestsByEmployee(){
    this.requestToDependenciesService.getRequestByIdEmployee(this.actuallyIdEmployee)
    .subscribe(
      (data) => {
        console.log(data);
        this.requests = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(){
    this.getRequestsByEmployee();
  }



}
