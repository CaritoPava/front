import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { ManagementComponent } from './pages/management/management.component';
import { CreateLegalInstrumentComponent } from './pages/create-legal-instrument/create-legal-instrument.component';
import { AssignmrntsByDependencieComponent } from './pages/assignmrnts-by-dependencie/assignmrnts-by-dependencie.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewCheckerComponent } from './pages/view-checker/view-checker.component';


const routes : Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {path:"create", component: CreateLegalInstrumentComponent},
      {path:"asignments", component: AssignmentsComponent },
      {path:"view/:id", component: ManagementComponent},
      {path:"otherDependencies", component: AssignmrntsByDependencieComponent},
      {path:"viweChecker/:id", component:ViewCheckerComponent},
      {path:"**", redirectTo:"create"}

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RegistrationRoutingModule { }
