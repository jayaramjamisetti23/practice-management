import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient Name', type: 'text' },
    { field: 'appointmentDate', header: 'Appointment Date', type: 'date' },
    { field: 'time', header: 'Time', type: 'text' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Appointments';
  apiCall: string = APP_APICALLS.appointments || '/appointments';
  apiResponseKey: string = 'appointments';
}
