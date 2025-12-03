import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Form Name', type: 'text' },
    { field: 'category', header: 'Category', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Forms';
  apiCall: string = APP_APICALLS.forms || '/forms';
  apiResponseKey: string = 'forms';
}
