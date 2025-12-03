import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-pharmacies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Pharmacy Name', type: 'text' },
    { field: 'address', header: 'Address', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Pharmacies';
  apiCall: string = APP_APICALLS.pharmacies || '/pharmacies';
  apiResponseKey: string = 'pharmacies';
}
