import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-bar-nav-administrator',
  templateUrl: './bar-nav-administrator.component.html',
  styleUrls: ['./bar-nav-administrator.component.css']
})
export class BarNavAdministratorComponent {

  items!: MenuItem[];

    ngOnInit() {
        this.items = [

            {
              label: 'Solicitar reportes',
              icon: 'pi pi-fw pi-home',
              routerLink: 'report'
          },
        ];
    }
}


