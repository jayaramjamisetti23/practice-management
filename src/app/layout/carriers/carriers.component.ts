import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-carriers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Carrier Name', type: 'text' },
    { field: 'code', header: 'Code', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Carriers';
  apiCall: string = APP_APICALLS.carrier || '/carriers';
  apiResponseKey: string = 'carriers';
}
