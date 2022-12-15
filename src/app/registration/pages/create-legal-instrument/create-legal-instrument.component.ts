import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';

interface DocumentTypes{
  id: number;
  name: string;
}

interface Microenterprise{
  id: number;
  name: string;
}


@Component({
  selector: 'app-create-legal-instrument',
  templateUrl: './create-legal-instrument.component.html',
  styleUrls: ['./create-legal-instrument.component.css']
})
export class CreateLegalInstrumentComponent implements OnInit {

  registerForm!:FormGroup;

//inyectar el servicio
  constructor(private fb: FormBuilder, private legalInstrumentService: LegalInstrumentServiceService) {};


 addLegalInstrument(){
    this.legalInstrumentService.addLegalInstrument()
    .subscribe(
      (data) => {
        console.log(data);
      }
    )

  }





  // documentTypes: DocumentTypes[];

  // selctedDocumentType: DocumentTypes;


  // constructor() {
  //   this.documentTypes = [
  //     {id: 1, name: 'Acta de constitución'},
  //     {id: 2, name: 'Acta de asamblea'},
  //     {id: 3, name: 'Acta de elección de directiva'},
  //     {id: 4, name: 'Acta de elección de revisor fiscal'},
  //   ];

  //   this.selctedDocumentType = this.documentTypes[0];


  // }



  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSumit(){
    console.log(this.registerForm.value);
    this.addLegalInstrument();
  }

  initForm():FormGroup{
  return this.fb.group({
    documentType: ['', Validators.required],
    microenterprise: ['', Validators.required],
    detail: ['', Validators.required, Validators.maxLength(2)],
    rights: ['', Validators.required,Validators.maxLength(200)],
    plaintiffsRequest: ['', Validators.required, Validators.maxLength(200)],
    fundamentalsMinistryLaw: ['', Validators.required,Validators.maxLength(200)],
    ministryRequest: ['', Validators.required, Validators.maxLength(200)],
    notifications: ['', Validators.required, Validators.maxLength(200)],
    anexos: ['', Validators.required,Validators.maxLength(200)],
 });
  }



}
