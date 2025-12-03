import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  type: string = 'filter';
  header: string = 'Employees';
  apiCall: string = '/employees';
  apiResponseKey: string = 'employees';

  tableFields = [
    { field: 'name', header: 'Employee Name', type: 'text' },
    { field: 'joining', header: 'Joining Date', type: 'date' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

}
