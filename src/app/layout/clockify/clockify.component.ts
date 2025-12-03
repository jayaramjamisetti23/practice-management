import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-clockify',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './clockify.component.html',
  styleUrls: ['./clockify.component.scss']
})
export class ClockifyComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'employeeName', header: 'Employee', type: 'text' },
    { field: 'clockInTime', header: 'Clock In', type: 'text' },
    { field: 'clockOutTime', header: 'Clock Out', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Clockify';
  apiCall: string = APP_APICALLS.clockInClockOut || '/clockify';
  apiResponseKey: string = 'clockifyRecords';
}
