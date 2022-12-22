import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimeNgModule,
    FormsModule,
  ],
  exports:[
    LoginRoutingModule,
    FormsModule,

  ]

})
export class LoginModule { }
