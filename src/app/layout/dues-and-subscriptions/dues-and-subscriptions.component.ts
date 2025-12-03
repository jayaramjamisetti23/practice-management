import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-dues-and-subscriptions',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dues-and-subscriptions.component.html',
  styleUrls: ['./dues-and-subscriptions.component.scss']
})
export class DuesAndSubscriptionsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'dueAmount', header: 'Due Amount', type: 'currency' },
    { field: 'dueDate', header: 'Due Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Dues & Subscriptions';
  apiCall: string = APP_APICALLS.duesAndSubscriptions || '/duesAndSubscriptions';
  apiResponseKey: string = 'dues';
}
