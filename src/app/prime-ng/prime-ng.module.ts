import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table'





@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    TableModule
  ],
})
export class PrimeNgModule { }
