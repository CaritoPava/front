import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ResponseMessage } from 'src/app/registration/interfaces/interfaces';
import { UploadCSVService } from '../../../registration/services/upload-csv.service';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent implements OnInit {

  constructor(private uploadCSVService:UploadCSVService){}


 info: String = 'Cargue la informacion';
 uploadFile!: File;
 img: String = 'img';
 response: ResponseMessage = {
    message: '',
   code: ''
 }

 onUpload(event: any) {
   console.log(event.files);
   this.uploadFile = event.files[0];
    this.sentFile(this.uploadFile);
}

sentFile(file : File){
  this.uploadCSVService.uploadFile(file).subscribe(
    (response:any) => {
      console.log(response);
      this.response.message = response;
      this.response.code = response.status;
      Swal.fire({
        title: 'Carga Exitosa',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

    },
    (error:any) => {
      console.log(error);
      this.response.message = error;
      this.response.code = error.status;
      Swal.fire({
        title: 'Carga Fallida',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  );
}

  ngOnInit(): void {

  }

}
