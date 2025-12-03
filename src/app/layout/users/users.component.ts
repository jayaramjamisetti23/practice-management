import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'User Name', type: 'text' },
    { field: 'email', header: 'Email', type: 'text' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Users';
  apiCall: string = APP_APICALLS.users || '/users';
  apiResponseKey: string = 'users';
}
