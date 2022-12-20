import { Component, Input, OnInit } from '@angular/core';
import { LegalInstrumentComplete } from '../../interfaces/interfaces';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {

@Input() legalInstruments: LegalInstrumentComplete[] = [];


}
