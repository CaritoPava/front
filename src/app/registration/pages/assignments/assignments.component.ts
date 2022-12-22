import { Component, OnInit } from '@angular/core';
import { LegalInstrumentComplete } from '../../interfaces/interfaces';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { LoginService } from '../../../login/services/login.service';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  constructor(public legalInstrumentServiceService:LegalInstrumentServiceService,
    private loginService:LoginService) { }

  legalInstrumentAssignment!:LegalInstrumentComplete;
  legalInstrumentsAssignments!:LegalInstrumentComplete[];

  get login (){
    return this.loginService.employee;
   }
   actuallyIdEmployee:number = this.login.id || 0;


  obtenerLegalInstruments(){
    this.getLegalInstrumentsByResponsable()
  }


  getLegalInstrumentsByResponsable(){
    this.legalInstrumentServiceService.getLegalInstrumentsByResponsable(this.actuallyIdEmployee)
    .subscribe(
      (data) => {
        console.log(data);
        this.legalInstrumentsAssignments = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }


  // enviar lista de legal instruments al componente de asignación


  ngOnInit(){
    this.getLegalInstrumentsByResponsable();
  }



}
