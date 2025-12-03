import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-flowboard',
  templateUrl: './flowboard.component.html',
  styleUrls: ['./flowboard.component.scss']
})
export class FlowboardComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Flowboard Name', type: 'text' },
    { field: 'steps', header: 'Steps', type: 'text' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Flowboard';
  apiCall: string = APP_APICALLS.flowboard || '/flowboard';
  apiResponseKey: string = 'flowboards';
}
