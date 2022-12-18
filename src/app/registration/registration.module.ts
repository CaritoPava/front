import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CreateLegalInstrumentComponent } from './pages/create-legal-instrument/create-legal-instrument.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AssignmentsComponent } from './pages/assignments/assignments.component';

import { ManagementComponent } from './pages/management/management.component';
import { ViewListComponent } from './components/view-list/view-list.component';






@NgModule({
  declarations: [
    CreateLegalInstrumentComponent,
    AssignmentsComponent,
    ManagementComponent,
    ViewListComponent

  ],
  exports: [
    CreateLegalInstrumentComponent,
    AssignmentsComponent,
    ManagementComponent,
    ViewListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module

  ],

})
export class RegistrationModule { }
