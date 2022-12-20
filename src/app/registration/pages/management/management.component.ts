import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { AnswerLegalInstrument, LegalInstrumentComplete, AnswerAdd, LegalInstrumentUpdate, RequestToDependencie, RequestToDependencieResponse } from '../../interfaces/interfaces';
import { AnswersLegalInstrumentService } from '../../services/answers-legal-instrument.service';

import Swal from 'sweetalert2';
import { RequestToDependenciesService } from '../../services/request-to-dependencies.service';
import { FormGroup } from '@angular/forms';

// enum con status y codigo

enum Status {
  'Generada'= 8,
  'Aceptada'= 9,
  'Rechazada'= 10
}

enum Dependencie {
  'Investigaciones'= 1,
  'Juridica'= 2,
  'Financiera'= 21,
  'Verificaciones'= 22,
  'Radicaciones'= 23,
}


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit{

  constructor(private activateRoute:ActivatedRoute,
    private legalInstrumentServiceService:LegalInstrumentServiceService,
    private answersLegalInstrumentService: AnswersLegalInstrumentService,
    private requestToDependenciesService:RequestToDependenciesService,
    private router:Router) { }

  idLegalInstrument!:number ;
  legalInstrument!:LegalInstrumentComplete


public answer:AnswerLegalInstrument = {
  id:0,
  answer:"",
  date:"",
  idLegalInstrument:0,
}

public answerAdd:AnswerAdd = {
  answer:"",
  idLegalInstrument:0,
}

public legalInstrumentUpdate:LegalInstrumentUpdate = {}

public resposeApi :string = "";

public request: RequestToDependencie= {
  request:"",
  idDependencie:0,
  idLegalInstrument:0,
  idStatus:0
}

public requestAll: RequestToDependencieResponse[] = [];


getAnswers(idLegalInstrument:number){
  this.answersLegalInstrumentService.getAnswersLegalInstrument(idLegalInstrument)
  .subscribe(
    (data:any) => {
      this.answer = data[0];
    }
  )
}

getInfoLegalInstrument(idLegalInstrument:number){
  this.legalInstrumentServiceService.getLegalInstrumentById(idLegalInstrument)
  .subscribe(
    (instrument) => {
      this.legalInstrument = instrument;
    }
  )
}

getRequests(idLegalInstrument:number){
  this.requestToDependenciesService.getRequestsByLegalInstrument(idLegalInstrument)
  .subscribe(
    (data:any) => {
      this.requestAll = data;
    }
  )
}

addNewAnswer(answer:string){
  console.log(answer, "answer");
  this.answerAdd.answer = answer;
  this.answerAdd.idLegalInstrument = this.idLegalInstrument;

  this.answersLegalInstrumentService.addAnswerLegalInstrument(this.answerAdd)
  .subscribe(
    (data) => {
     this.resposeApi = "Respuesta enviada";
    },
    err=> {
      console.log(err, "err");
    }
  )
 this.getInfoLegalInstrument(this.idLegalInstrument);
}

addNewCompanyRequest(request:string){
  console.log(request, "request");
  this.legalInstrumentUpdate.companyRequest = request;
  this.legalInstrumentServiceService.updateLegalInstrument(this.idLegalInstrument, this.legalInstrumentUpdate)
  .subscribe(
    (data) => {
      console.log(data, "data");
    },
    err=> {
      console.log(err, "err");
    }
  )
  this.getInfoLegalInstrument(this.idLegalInstrument);

}

addNewBasicsOfBusinessLaw(law:string){
  this.legalInstrumentUpdate.basicsOfBusinessLaw = law;
  this.legalInstrumentServiceService.updateLegalInstrument(this.idLegalInstrument, this.legalInstrumentUpdate)
  .subscribe(
    (data) => {
      console.log(data, "data");
    },
    err=> {
      console.log(err, "err");
    }
  )
  this.getInfoLegalInstrument(this.idLegalInstrument);

}

addNewContemptIncident(incident:string){
  this.legalInstrumentUpdate.contemptIncident = incident;
  this.legalInstrumentServiceService.updateLegalInstrument(this.idLegalInstrument, this.legalInstrumentUpdate)
  .subscribe(
    (data) => {
      console.log(data, "data");
    },
    err=> {
      console.log(err, "err");
    }
  )
  this.getInfoLegalInstrument(this.idLegalInstrument);

}

addNewFailed(failed:string){
  this.legalInstrumentUpdate.failed = failed;
  this.legalInstrumentServiceService.updateLegalInstrument(this.idLegalInstrument, this.legalInstrumentUpdate)
  .subscribe(
    (data) => {
      console.log(data, "data");
    }
  )
  this.getInfoLegalInstrument(this.idLegalInstrument);
}

addRequestCheck(){
this.ngOnInit();
Swal.fire({
  title: '¿Estas seguro de enviar la solicitud?',
  text: "No podras revertir los cambios",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, enviar!'
}).then((result) => {
  if (result.isConfirmed) {
    if(this.legalInstrument.basicsOfBusinessLaw === null || this.legalInstrument.companyRequest === null || this.answer === undefined){
      console.log("Informacion incomnpleta");
      Swal.fire(
        'Error!',
        'La solicitud no ha sido enviada, por favor completa la informacion.',
      )
     } else{

      this.request={
        request:"Petición para verificar instrumento legal",
        idDependencie:Dependencie.Verificaciones,
        idLegalInstrument:this.idLegalInstrument,
        idStatus:Status.Generada
      }
      this.requestToDependenciesService.addRequestToDependencies(this.request)
      .subscribe(
        (data) => {
          console.log(data, "data");
          Swal.fire(
            'Enviado!',
            'La solicitud ha sido enviada.',
            'success'
          )
          this.router.navigate(['/legalInstruments/asignments'])
        },
        err=> {
          console.log(err, "err");
          Swal.fire(
            'Error!',
            'La solicitud no ha sido enviada.',
          )
        }
      )
     }
  }
})
}

addNewRequest(info:FormGroup){

  this.request={
    request:info.value.request,
    idDependencie:info.value.idDependencie,
    idLegalInstrument:this.idLegalInstrument,
    idStatus:Status.Generada
  }
  this.requestToDependenciesService.addRequestToDependencies(this.request)
  .subscribe(
    (data) => {
      console.log(data, "data");
      Swal.fire(
        'Enviado!',
        'La solicitud ha sido enviada.',
        'success'
      )
    }
  )
}


ngOnInit(): void {
  this.activateRoute.params.subscribe(
   (({id}) => this.idLegalInstrument = id)
  )
  this.getInfoLegalInstrument(this.idLegalInstrument);
  this.getAnswers(this.idLegalInstrument);
  this.getRequests(this.idLegalInstrument);

}
// onning the modal
openModal(content:any){
console.log(content, "content");
}





}
