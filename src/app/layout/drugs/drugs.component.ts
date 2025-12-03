import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-drugs',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Drug Name', type: 'text' },
    { field: 'dosage', header: 'Dosage', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Drugs';
  apiCall: string = APP_APICALLS.drugs || '/drugs';
  apiResponseKey: string = 'drugs';
}
