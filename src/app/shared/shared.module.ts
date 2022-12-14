import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoGeneralComponent } from './barInfo/info-general/info-general.component';
import { BarFooderComponent } from './fooder/bar-fooder/bar-fooder.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoGeneralComponent,
    BarFooderComponent
  ],
  exports: [
    HeaderComponent,
    InfoGeneralComponent,
    BarFooderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
