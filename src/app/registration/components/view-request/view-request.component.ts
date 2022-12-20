import { Component, Input } from '@angular/core';
import { RequestToDependencieResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent {

  @Input() requestAll: RequestToDependencieResponse[] = [];


}
