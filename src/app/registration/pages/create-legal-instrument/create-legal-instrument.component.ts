import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators ,FormControl} from '@angular/forms';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { ResonseMessage } from '../../interfaces/interfaces';

interface DocumentTypes{
  id: number;
  name: string;
}

interface Microenterprise{
  id: number;
  name: string;
}


@Component({
  selector: 'app-create-legal-instrument',
  templateUrl: './create-legal-instrument.component.html',
  styleUrls: ['./create-legal-instrument.component.css']
})
export class CreateLegalInstrumentComponent implements OnInit {

  public response:ResonseMessage = {message:"", code:""};


  constructor(private fb: FormBuilder, private legalInstrumentService: LegalInstrumentServiceService) {};


  registerForm:FormGroup = this.fb.group({
    idTypeInstrument: ['', Validators.required],
    idMicroenterprise: ['', Validators.required],
    detail: ['', Validators.required, ],
    rights: ['', Validators.required,],
    plaintiffsRequest: ['', Validators.required, ],
    fundamentalsMinistryLaw: ['', Validators.required],
    ministryRequest: ['', Validators.required],
    notifications: ['', Validators.required],
    anexos: [false],
 });


 campIsValid(campo:string){
   return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched;
 }

// enviar datos del formulario

 addLegalInstrument(){
    this.legalInstrumentService.addLegalInstrument(this.registerForm.value)
    .subscribe(
      data => {
        console.log(data, "data");
        this.response.message = data.message;
        this.response.code = data.code;
      },
      err => {
        console.log(err, "err");
        this.response.message = "Error al registrar el instrumento legal";
        this.response.code = err.status;
      }
    )

  }



  onSumit(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
    this.addLegalInstrument();
    this.registerForm.reset();
    this.response =  {message:"", code:""};
  }

  ngOnInit(): void {
    this.registerForm.reset({
      anexos: false
    });


  }



}
