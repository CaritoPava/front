import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { AnswerLegalInstrument, Employee, LegalInstrumentComplete, Microenterprise, RequestToDependencie, RequestToDependencieResponse, TypesLegalInstrument, StateLegalInstrument,Dependencie, RequestToDependencieUpdate } from '../../interfaces/interfaces';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { RequestToDependenciesService } from '../../services/request-to-dependencies.service';
import { AnswersLegalInstrumentService } from '../../services/answers-legal-instrument.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../../login/services/login.service';

enum Status {
  'Generada'= 8,
  'Aceptada'= 9,
  'Rechazada'= 10
}

enum DependencieType {
  'Investigaciones'= 1,
  'Juridica'= 2,
  'Financiera'= 21,
  'Verificaciones'= 22,
  'Radicaciones'= 23,
}
@Component({
  selector: 'app-view-checker',
  templateUrl: './view-checker.component.html',
  styleUrls: ['./view-checker.component.css']
})

export class ViewCheckerComponent implements OnInit{

  id!:number;
  request!:RequestToDependencieResponse;
  isInfoVisible:boolean = false;
  nameDendencie = DependencieType[DependencieType.Verificaciones];

  get login (){
    return this.loginService.employee;
   }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap(({id}) => this.requestToDependenciesService.getRequestById(id)))
    .subscribe(
      (data) => {
        this.request = data;
        console.log(data);
      }

    )

  }

  public type:TypesLegalInstrument = {
    id_Type:0,
    name:"",
  }

  public microenterprise:Microenterprise = {
  id_Microenterprise:0,
  nit:"",
  name:"",
  address:"",
  phone:"",
  }

  public state:StateLegalInstrument = {
    id:0,
    name:"",
  }

  public dependencie:Dependencie = {
    id:0,
    name:""
  }

  public employee:Employee = {
    id:0,
  document:0,
  name:"",
  lastName:"",
  phone:"",
  dependencie: this.dependencie
  }

  public legalInstrument: LegalInstrumentComplete = {
    id:0,
    filing:"",
    detail:"",
    rights:"",
    plaintiffsRequest:"",
    fundamentalsMinistryLaw:"",
    ministryRequest:"",
    notifications:"",
    anexos:"",
    companyRequest:"",
    basicsOfBusinessLaw:"",
    failed:"",
    contemptIncident:"",
    isActive:"",
    creationDate:"",
    typeInstrument:this.type,
    microenterprise:this.microenterprise,
    employeeResponsible:this.employee,
    employeeChecked:this.employee,
    stateLegalInstrument:this.state
  }

  public addRquest: RequestToDependencie= {
    request:"",
    idDependencie:0,
    idLegalInstrument:0,
    idStatus:0
  }

  public answer:AnswerLegalInstrument = {
    id:0,
    answer:"",
    date:"",
    idLegalInstrument:0,
  }

  constructor(private activateRoute:ActivatedRoute,
    private requestToDependenciesService:RequestToDependenciesService,
    private legalInstrumentServiceService:LegalInstrumentServiceService,
    private answersLegalInstrumentService: AnswersLegalInstrumentService,
    private loginService: LoginService,
    private router:Router) { }

    getInfoLegalInstrument(idLegalInstrument:number){
      this.legalInstrumentServiceService.getLegalInstrumentById(this.request.idLegalInstrument)
      .subscribe(
        (instrument) => {
          this.legalInstrument = instrument;
          console.log(instrument);
        }
      )
    }

    getAnswers(idLegalInstrument:number){
      this.answersLegalInstrumentService.getAnswersLegalInstrument(this.request.idLegalInstrument)
      .subscribe(
        (data:any) => {
          this.answer = data[0];
        }
      )
    }
    viewInfoLegalInstrument(){
      this.getInfoLegalInstrument(this.request.idLegalInstrument);
      this.getAnswers(this.request.idLegalInstrument);
      this.isInfoVisible = !this.isInfoVisible;
    }

    addNewResponse(response:RequestToDependencieUpdate){
      console.log(response);
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
          this.requestToDependenciesService.updateRequestToDependencies(this.request.id, response)
      .subscribe(
        (data) => {
          Swal.fire(
            'Enviado!',
            'La solicitud ha sido enviada.',
            'success'
          )
          this.router.navigate(['/legalInstruments/otherDependencies']);
        },
        err =>{
          Swal.fire(
            'Error!',
            'Ha ocurrido un error.',
            'error'
          )
        }
      )

      }})
  }









}
