import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'fileName', header: 'File Name', type: 'text' },
    { field: 'uploadDate', header: 'Upload Date', type: 'date' },
    { field: 'status', header: 'Status', type: 'badge' }
  ];

  type: string = 'filter';
  header: string = 'Uploads';
  apiCall: string = APP_APICALLS.Uploads || '/uploads';
  apiResponseKey: string = 'uploads';
}
