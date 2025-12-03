import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-procedures',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Procedure Name', type: 'text' },
    { field: 'code', header: 'Code', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Procedures';
  apiCall: string = APP_APICALLS.procedures || '/procedures';
  apiResponseKey: string = 'procedures';
}
