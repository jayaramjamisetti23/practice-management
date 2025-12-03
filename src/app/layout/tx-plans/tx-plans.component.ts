import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-tx-plans',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tx-plans.component.html',
  styleUrls: ['./tx-plans.component.scss']
})
export class TxPlansComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Plan Name', type: 'text' },
    { field: 'description', header: 'Description', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Treatment Plans';
  apiCall: string = APP_APICALLS.txPlans || '/txPlans';
  apiResponseKey: string = 'txPlans';
}
