import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Template Name', type: 'text' },
    { field: 'category', header: 'Category', type: 'text' },
    { field: 'createdDate', header: 'Created Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Templates';
  apiCall: string = APP_APICALLS.templates || '/templates';
  apiResponseKey: string = 'templates';
}
