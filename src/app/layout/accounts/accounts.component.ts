import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'balance', header: 'Balance', type: 'currency' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Accounts';
  apiCall: string = APP_APICALLS.accounts || '/accounts';
  apiResponseKey: string = 'accounts';
}
