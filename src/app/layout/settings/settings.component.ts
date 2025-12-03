import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  tableFields: any[] = [
    { field: 'key', header: 'Setting Key', type: 'text' },
    { field: 'value', header: 'Value', type: 'text' },
    { field: 'description', header: 'Description', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Settings';
  apiCall: string = APP_APICALLS.Settings || '/settings';
  apiResponseKey: string = 'settings';
}
