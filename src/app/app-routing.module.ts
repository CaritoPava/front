import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLegalInstrumentComponent } from './registration/pages/create-legal-instrument/create-legal-instrument.component';
import { AssignmentsComponent } from './registration/pages/assignments/assignments.component';
import { ManagementComponent } from './registration/pages/management/management.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateLegalInstrumentComponent,
    pathMatch: 'full'
  },
  {
    path: 'assignments',
    component: AssignmentsComponent
  },
  {
    path: 'legalInstrument/:id',
    component: ManagementComponent
  },
  {
    path: '**',
    redirectTo: 'create'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
