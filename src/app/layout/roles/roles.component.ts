import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Role Name', type: 'text' },
    { field: 'description', header: 'Description', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Roles';
  apiCall: string = APP_APICALLS.roles || '/roles';
  apiResponseKey: string = 'roles';
}
