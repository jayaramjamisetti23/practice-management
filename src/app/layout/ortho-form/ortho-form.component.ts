import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-ortho-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ortho-form.component.html',
  styleUrls: ['./ortho-form.component.scss']
})
export class OrthoFormComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'patientName', header: 'Patient', type: 'text' },
    { field: 'formName', header: 'Form Name', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Ortho Form';
  apiCall: string = APP_APICALLS.orthoForm || '/orthoForm';
  apiResponseKey: string = 'forms';
}
