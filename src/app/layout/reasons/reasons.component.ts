import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Reason', type: 'text' },
    { field: 'description', header: 'Description', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Reasons';
  apiCall: string = APP_APICALLS.reasons || '/reasons';
  apiResponseKey: string = 'reasons';
}
