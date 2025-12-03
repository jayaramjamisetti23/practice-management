import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'referredTo', header: 'Referred To', type: 'text' },
    { field: 'referralDate', header: 'Referral Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Referrals';
  apiCall: string = APP_APICALLS.referrals || '/referrals';
  apiResponseKey: string = 'referrals';
}
