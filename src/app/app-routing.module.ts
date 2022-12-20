import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  //{
  //  path: 'create',
  //  component: CreateLegalInstrumentComponent,
 //   pathMatch: 'full'
  //},
 // {
  //  path: 'assignments',
  //  component: AssignmentsComponent
 // },
 // {
 //   path: 'legalInstrument/:id',
  //  component: ManagementComponent
  //},
 // {
  //  path: '**',
  //  redirectTo: 'create'
  //},
  {
    path:'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'legalInstruments',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:'404',
    component:ErrorComponent
  },
  {
    path:'**',
    redirectTo:"404"
  }

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
