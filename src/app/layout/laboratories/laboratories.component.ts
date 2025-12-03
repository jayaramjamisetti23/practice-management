import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-laboratories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.scss']
})
export class LaboratoriesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Lab Name', type: 'text' },
    { field: 'address', header: 'Address', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Laboratories';
  apiCall: string = APP_APICALLS.laboratories || '/laboratories';
  apiResponseKey: string = 'laboratories';
}
