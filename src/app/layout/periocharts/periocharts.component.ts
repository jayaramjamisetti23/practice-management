import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-periocharts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './periocharts.component.html',
  styleUrls: ['./periocharts.component.scss']
})
export class PeriochartsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'examDate', header: 'Exam Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Periocharts';
  apiCall: string = APP_APICALLS.perioCharts || '/periocharts';
  apiResponseKey: string = 'charts';
}
