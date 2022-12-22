import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestToDependencieUpdate } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

enum Status {
  'Generada'= 8,
  'Aceptada'= 9,
  'Rechazada'= 10
}

@Component({
  selector: 'app-response-checked',
  templateUrl: './response-checked.component.html',
  styleUrls: ['./response-checked.component.css']
})
export class ResponseCheckedComponent {

  @Output() onNewResponse:EventEmitter<RequestToDependencieUpdate> = new EventEmitter();

  public requestToDependencieUpdate:RequestToDependencieUpdate = {
    response:'',
    responseStatus:0,
  }

 comment:string = '';

 check(){
  this.comment = 'instrumento legal aprobado'
  this.requestToDependencieUpdate.response = this.comment;
  this.requestToDependencieUpdate.responseStatus = Status.Aceptada;
  this.onNewResponse.emit(this.requestToDependencieUpdate);
 }

 disapprove(){
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
