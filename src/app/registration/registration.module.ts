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
import { InfoLegalInstrumentComponent } from './components/info-legal-instrument/info-legal-instrument.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { WriteResponseComponent } from './components/write-response/write-response.component';
import { MakeRequestComponent } from './components/make-request/make-request.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { AssignmrntsByDependencieComponent } from './pages/assignmrnts-by-dependencie/assignmrnts-by-dependencie.component';
import { ViewCheckerComponent } from './pages/view-checker/view-checker.component';
import { ViewListRequestComponent } from './components/view-list-request/view-list-request.component';






@NgModule({
  declarations: [
    CreateLegalInstrumentComponent,
    AssignmentsComponent,
    ManagementComponent,
    ViewListComponent,
    InfoLegalInstrumentComponent,
    HomeComponent,
    WriteResponseComponent,
    MakeRequestComponent,
    ViewRequestComponent,
    AssignmrntsByDependencieComponent,
    ViewCheckerComponent,
    ViewListRequestComponent
  ],

  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    RegistrationRoutingModule,
    SharedModule
  ],

})
export class RegistrationModule { }
