import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-available-prompts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './available-prompts.component.html',
  styleUrls: ['./available-prompts.component.scss']
})
export class AvailablePromptsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Prompt Name', type: 'text' },
    { field: 'content', header: 'Content', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Available Prompts';
  apiCall: string = APP_APICALLS.availablePrompts || '/availablePrompts';
  apiResponseKey: string = 'prompts';
}
