import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'doctorName', header: 'Doctor Name', type: 'text' },
    { field: 'dayOfWeek', header: 'Day', type: 'text' },
    { field: 'startTime', header: 'Start Time', type: 'text' },
    { field: 'endTime', header: 'End Time', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Schedules';
  apiCall: string = APP_APICALLS.schedules || '/schedules';
  apiResponseKey: string = 'schedules';
}
