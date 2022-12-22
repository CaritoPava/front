import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { RequestToDependencieUpdate } from '../../interfaces/interfaces';

enum Status {
  'Generada'= 8,
  'Aceptada'= 9,
  'Rechazada'= 10
}

@Component({
  selector: 'app-response-request',
  templateUrl: './response-request.component.html',
  styleUrls: ['./response-request.component.css']
})
export class ResponseRequestComponent {

  @Output() onNewResponse:EventEmitter<RequestToDependencieUpdate> = new EventEmitter();

  public requestToDependencieUpdate:RequestToDependencieUpdate = {
    response:'',
    responseStatus:0,
  }

 comment:string = '';

 approveRequest(){

  if(this.comment == ''){
    this.comment = 'Peticion aprobada'
  } else {
  this.comment = this.comment
  }
  this.requestToDependencieUpdate.response = this.comment;
  this.requestToDependencieUpdate.responseStatus = Status.Aceptada;
  this.onNewResponse.emit(this.requestToDependencieUpdate);
  this.comment = ''
 }

 disapproveRequest(){
  if(this.comment == ''){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debe ingresar un comentario!',
    })
  } else{
    this.requestToDependencieUpdate.response = this.comment;
    this.requestToDependencieUpdate.responseStatus = Status.Rechazada;
    this.onNewResponse.emit(this.requestToDependencieUpdate);
    this.comment = '';
  }

}


}
