import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent implements OnInit {

 info: String = 'Cargue la informacion';
 uploadFile: String = 'Cargar Archivo';
 img: String = 'img';

 handleClick() {
    console.log('click');
  }

  ngOnInit(): void {

  }

}
