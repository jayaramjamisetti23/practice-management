import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Insurance Name', type: 'text' },
    { field: 'code', header: 'Code', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Insurances';
  apiCall: string = APP_APICALLS.insurances || '/insurances';
  apiResponseKey: string = 'insurances';
}
