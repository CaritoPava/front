import { Component, OnInit } from '@angular/core';
import { LegalInstrumentComplete } from '../../interfaces/interfaces';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  constructor(public legalInstrumentServiceService:LegalInstrumentServiceService) { }

  legalInstrumentAssignment!:LegalInstrumentComplete;
  legalInstrumentsAssignments!:LegalInstrumentComplete[];

  obtenerLegalInstruments(){
    this.getLegalInstrumentsByResponsable()
  }


  getLegalInstrumentsByResponsable(){
    this.legalInstrumentServiceService.getLegalInstrumentsByResponsable()
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
