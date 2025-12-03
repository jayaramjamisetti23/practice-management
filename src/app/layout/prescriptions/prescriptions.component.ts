import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})
export class PrescriptionsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'drugName', header: 'Drug', type: 'text' },
    { field: 'issuedDate', header: 'Issued Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Prescriptions';
  apiCall: string = APP_APICALLS.prescriptions || '/prescriptions';
  apiResponseKey: string = 'prescriptions';
}
