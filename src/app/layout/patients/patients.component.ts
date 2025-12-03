import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Patient Name', type: 'text' },
    { field: 'email', header: 'Email', type: 'text' },
    { field: 'phone', header: 'Phone', type: 'text' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Patients';
  apiCall: string = APP_APICALLS.patients || '/patients';
  apiResponseKey: string = 'patients';
}
