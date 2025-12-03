import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-insurance-claim',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.scss']
})
export class InsuranceClaimComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'claimNumber', header: 'Claim Number', type: 'text' },
    { field: 'status', header: 'Status', type: 'badge' },
    { field: 'claimDate', header: 'Claim Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Insurance Claims';
  apiCall: string = APP_APICALLS.claimManagements || '/insuranceClaim';
  apiResponseKey: string = 'claims';
}
