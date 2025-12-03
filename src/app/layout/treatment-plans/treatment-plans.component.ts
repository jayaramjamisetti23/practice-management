import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-treatment-plans',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './treatment-plans.component.html',
  styleUrls: ['./treatment-plans.component.scss']
})
export class TreatmentPlansComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient Name', type: 'text' },
    { field: 'treatmentName', header: 'Treatment', type: 'text' },
    { field: 'startDate', header: 'Start Date', type: 'date' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Treatment Plans';
  apiCall: string = APP_APICALLS.treatmentPlan || '/treatmentPlan';
  apiResponseKey: string = 'treatmentPlans';
}
