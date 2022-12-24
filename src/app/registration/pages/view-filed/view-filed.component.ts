import { Component } from '@angular/core';
import { RequestToDependenciesService } from '../../services/request-to-dependencies.service';
import { RequestToDependencieResponse, RequestToDependencieUpdate } from '../../interfaces/interfaces';
import { LoginService } from '../../../login/services/login.service';
import { DocumentsAndReportsService } from '../../services/documents-and-reports.service';
import Swal from 'sweetalert2';

export enum Dependencie {
  'Investigaciones'= 1,
  'Juridica'= 2,
  'Financiera'= 21,
  'Verificaciones'= 22,
  'Radicaciones'= 23,
}

enum Status {
  'Generada'= 8,
  'Aceptada'= 9,
  'Rechazada'= 10
}

@Component({
  selector: 'app-view-filed',
  templateUrl: './view-filed.component.html',
  styleUrls: ['./view-filed.component.css']
})

export class ViewFiledComponent {

  constructor(public requestToDependenciesService:RequestToDependenciesService,
    public loginService:LoginService,
    public documentService:DocumentsAndReportsService){}


  get login (){
    return this.loginService.employee;
   }

  actuallyDependencie:number = Dependencie.Verificaciones
  actuallyIdEmployee:number = this.login.id || 0;

  public requestToDependencieUpdate:RequestToDependencieUpdate = {
    response:'',
    responseStatus:0,
  }


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

  download(id:number){
    console.log('download', id);
    this.documentService.getDocumentsAndReportsByLegalInstrument(id)
    .subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data], { type: 'text/csv' });
        const url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  confirm(idRequest:number){
    console.log('confirm', idRequest);
    this.requestToDependencieUpdate.response = 'Instrumento Lega radicado con exito';
    this.requestToDependencieUpdate.responseStatus = Status.Aceptada;
    this.requestToDependenciesService.updateRequestToDependencies(idRequest, this.requestToDependencieUpdate)
    .subscribe(
      (data) => {
        Swal.fire(
          'Enviado!',
          'La solicitud ha sido enviada. Por favor recarga la página para actualizar sus asignaciones',
          'success'
        )
      },
      err =>{
        Swal.fire(
          'Error!',
          'Ha ocurrido un error.',
          'error'
        )
      }
    )

  }

  ngOnInit(){
    this.getRequestsByEmployee();
  }

}
