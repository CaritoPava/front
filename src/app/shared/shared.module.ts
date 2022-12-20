import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoGeneralComponent } from './barInfo/info-general/info-general.component';
import { BarFooderComponent } from './fooder/bar-fooder/bar-fooder.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoGeneralComponent,
    BarFooderComponent,
    ErrorComponent
  ],
  exports: [
    HeaderComponent,
    InfoGeneralComponent,
    BarFooderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
