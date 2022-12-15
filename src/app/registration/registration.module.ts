import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CreateLegalInstrumentComponent } from './pages/create-legal-instrument/create-legal-instrument.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LegalInstrumentServiceService } from './services/legal-instrument-service.service';






@NgModule({
  declarations: [
    CreateLegalInstrumentComponent,

  ],
  exports: [
    CreateLegalInstrumentComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule

  ],

})
export class RegistrationModule { }
