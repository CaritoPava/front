import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';





@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule
  ],
})
export class PrimeNgModule { }
