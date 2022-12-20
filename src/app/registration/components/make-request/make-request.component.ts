
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LegalInstrumentComplete, Dependencie } from '../../interfaces/interfaces';
import { DependenciesService } from '../../services/dependencies.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent {


  @Input () idLegalInstrument!: number;
  @Input () legalInstrument!: LegalInstrumentComplete;
  @Output() onNewRequest:EventEmitter<FormGroup> = new EventEmitter();

 public dependencie:Dependencie={
    id:0,
    name:"",
 }

 constructor(private dependenciesServices:DependenciesService, private fb: FormBuilder) { }


 public dependencies : Dependencie[] = []

 requestForm:FormGroup = this.fb.group({
  request: ['',Validators.required],
  idDependencie: ['',Validators.required],
  })

  campIsValid(campo:string){
    return this.requestForm.controls[campo].errors && this.requestForm.controls[campo].touched;
  }

  getDependencies(){
    this.dependenciesServices.getDependencies()
    .subscribe(
      (data:Dependencie[]) => {
        this.dependencies = data;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  onSubmit(){
    if(this.requestForm.invalid){
      this.requestForm.markAllAsTouched();
      return;
    }
    console.log(this.requestForm);
    this.onNewRequest.emit(this.requestForm);
  }

  ngOnInit(): void {
    this.getDependencies();

  }


}
