import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    SharedModule,
    PrimeNgModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
