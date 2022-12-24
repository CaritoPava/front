import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 id:number=61 ;
 hola:string = "hola";
 comment:string = '';

  constructor(private router:Router,
              private loginService:LoginService) { }


  onSubmit(){
    console.log(this.id);
  }

  login(){
    console.log(this.id);
    this.loginService.login(this.id)
    .subscribe(
      (data:any) => {
        console.log(data);

        if(data.dependencie.name === "Juridica"){
          this.router.navigate(['./legalInstruments/asignments']);
        }
        if(data.dependencie.name === "Verificaciones"|| data.dependencie.name === "Financiera" || data.dependencie.name === "Investigaciones" ){
          this.router.navigate(['./legalInstruments/otherDependencies']);
        }
        if(data.dependencie.name === "Radicaciones"){
          this.router.navigate(['./legalInstruments/filed']);
        }
        if(data.dependencie.name === "Administracion"){
          this.router.navigate(['./legalInstruments/administrator']);
        }

    },
    (error:any) => {
      this.router.navigate(['./legalInstruments/create']);
    }
    )
  }

}
