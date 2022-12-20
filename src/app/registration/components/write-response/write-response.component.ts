import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LegalInstrumentComplete } from '../../interfaces/interfaces';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-write-response',
  templateUrl: './write-response.component.html',
  styleUrls: ['./write-response.component.css']
})
export class WriteResponseComponent {

  @Input () idLegalInstrument!: number;
  @Input () legalInstrument!: LegalInstrumentComplete;
  @Input () responseApi: string = "";

  @Output () onNewCompanyRequest:EventEmitter<string> = new EventEmitter();
  @Output () onNewBasicsOfBusinessLaw:EventEmitter<string> = new EventEmitter();
  @Output () onNewContemptIncident :EventEmitter<string> = new EventEmitter();
  @Output () onNewAnswer:EventEmitter<string> = new EventEmitter();
  @Output () onNewFailed:EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  writeAdditionalInformationForm:FormGroup = this.fb.group({
    companyRequest: [''],
    basicsOfBusinessLaw: [''],
    contemptIncident: [''],
    answer: [''],
    failed: ['']
  });

  onSubmit(){
if(this.writeAdditionalInformationForm.value.companyRequest != ""){
  this.onNewCompanyRequest.emit(this.writeAdditionalInformationForm.value.companyRequest);
  Swal.fire({
    title: `La actualizacion se realizo con exito`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}
if(this.writeAdditionalInformationForm.value.basicsOfBusinessLaw != ""){
  this.onNewBasicsOfBusinessLaw.emit(this.writeAdditionalInformationForm.value.basicsOfBusinessLaw);
  Swal.fire({
    title: `La actualizacion se realizo con exito`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}
if(this.writeAdditionalInformationForm.value.contemptIncident != ""){
  this.onNewContemptIncident.emit(this.writeAdditionalInformationForm.value.contemptIncident);
  Swal.fire({
    title: `La actualizacion se realizo con exito`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}
if(this.writeAdditionalInformationForm.value.answer != ""){
  this.onNewAnswer.emit(this.writeAdditionalInformationForm.value.answer);
  Swal.fire({
    title: `La actualizacion se realizo con exito`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}
if(this.writeAdditionalInformationForm.value.failed != ""){
  this.onNewFailed.emit(this.writeAdditionalInformationForm.value.failed);
  Swal.fire({
    title: `La actualizacion se realizo con exito`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
  this.writeAdditionalInformationForm.reset();
}
  }




}
