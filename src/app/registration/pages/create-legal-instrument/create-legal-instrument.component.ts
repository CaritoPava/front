import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators ,FormControl} from '@angular/forms';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { MicroenterpriseServiceService } from '../../services/microenterprise-service.service';
import { TypesLegalInstrumentServiceService } from '../../services/types-legal-instrument-service.service';
import { ResponseMessage, TypesLegalInstrument } from '../../interfaces/interfaces';
import { Microenterprise } from '../../interfaces/interfaces';


@Component({
  selector: 'app-create-legal-instrument',
  templateUrl: './create-legal-instrument.component.html',
  styleUrls: ['./create-legal-instrument.component.css']
})
export class CreateLegalInstrumentComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private legalInstrumentService: LegalInstrumentServiceService,
    private microenterpriseService:MicroenterpriseServiceService,
    private typeLegalInstrumentService : TypesLegalInstrumentServiceService) {};

  public response:ResponseMessage = {message:"", code:""};

  public microenterprise:Microenterprise = {
    id_Microenterprise:0,
    nit:"",
    name:"",
    address:"",
    phone:""
  };

  public microenterprises:Microenterprise[] = [];

  public type : TypesLegalInstrument={
    id_Type:0,
    name:""
  }

  public types:TypesLegalInstrument[] = [];

  registerForm:FormGroup = this.fb.group({
    idTypeInstrument: [0, Validators.required],
    idMicroenterprise: [0, Validators.required],
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

getMicroenterprises(){
  this.microenterpriseService.getMicroenterprises()
  .subscribe(
    (data) => {
      this.microenterprises = data;
    },
    err => {
      console.log(err, "err");
    }
  )
}

getTypesLegalInstrument(){
  this.typeLegalInstrumentService.getMicroenterprises()
  .subscribe(
    (data) => {
      console.log(data, "data");
      this.types = data;
      console.log(this.types, "types");
    },
    err => {
      console.log(err, "err");
    }
  )
}

 addLegalInstrument(){
  if(this.registerForm.value.anexos == null) this.registerForm.value.anexos = false;
  console.log(this.registerForm.value, "this.registerForm.value");
    this.legalInstrumentService.addLegalInstrument(this.registerForm.value)
    .subscribe(
      data => {
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
    this.addLegalInstrument();
    this.registerForm.reset();
    this.response =  {message:"", code:""};
  }

  ngOnInit(): void {
    this.registerForm.reset({
      anexos: false
    });
    this.getMicroenterprises();
    this.getTypesLegalInstrument();
  }

}
