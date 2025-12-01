import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  employees = [
    { name: 'John', joining: '2024-05-01', status: 'Active' },
    { name: 'Michael', joining: '2023-11-10', status: 'Inactive' }
  ];

  columns = [
    { field: 'name', header: 'Employee Name', type: 'text' },
    { field: 'joining', header: 'Joining Date', type: 'date' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

}
