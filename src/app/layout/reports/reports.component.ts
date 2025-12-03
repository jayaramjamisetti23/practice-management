import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Report Name', type: 'text' },
    { field: 'generatedDate', header: 'Generated Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Reports';
  apiCall: string = APP_APICALLS.reports || '/reports';
  apiResponseKey: string = 'reports';
}
