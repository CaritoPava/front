import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';






@NgModule({
  declarations: [],
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    FieldsetModule,
    InputTextareaModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    TableModule
  ],
})
export class PrimeNgModule { }
