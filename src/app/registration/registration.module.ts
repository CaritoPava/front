import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLegalInstrumentComponent } from './pages/create-legal-instrument/create-legal-instrument.component';





@NgModule({
  declarations: [
    CreateLegalInstrumentComponent
  ],
  exports: [
    CreateLegalInstrumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
