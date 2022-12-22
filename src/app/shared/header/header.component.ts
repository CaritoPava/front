import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';
import { Employee } from '../../registration/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router,
     private loginService:LoginService){}

     get login (){
      return this.loginService.employee;
     }



  nameApp:string = 'LegalAkí';
  dependencie :string = 'Registro';

  logout(){
    this.router.navigate(['./auth/login']);
  }



}
