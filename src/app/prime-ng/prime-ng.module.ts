import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {FieldsetModule} from 'primeng/fieldset';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table'





@NgModule({
  declarations: [],
  exports: [
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    FieldsetModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    TableModule
  ],
})
export class PrimeNgModule { }
