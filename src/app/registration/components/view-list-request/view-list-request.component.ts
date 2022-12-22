import { Component, Input } from '@angular/core';
import { RequestToDependencieResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-view-list-request',
  templateUrl: './view-list-request.component.html',
  styleUrls: ['./view-list-request.component.css']
})
export class ViewListRequestComponent {

  @Input() requests:RequestToDependencieResponse[] = [];



}
