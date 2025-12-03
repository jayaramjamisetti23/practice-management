import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-imaging',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './imaging.component.html',
  styleUrls: ['./imaging.component.scss']
})
export class ImagingComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'imagingType', header: 'Imaging Type', type: 'text' },
    { field: 'date', header: 'Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Imaging';
  apiCall: string = APP_APICALLS.teethImages || '/imaging';
  apiResponseKey: string = 'images';
}
