import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-auto-notes',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auto-notes.component.html',
  styleUrls: ['./auto-notes.component.scss']
})
export class AutoNotesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'name', header: 'Note Name', type: 'text' },
    { field: 'content', header: 'Content', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Auto Notes';
  apiCall: string = APP_APICALLS.autoNotes || '/autoNotes';
  apiResponseKey: string = 'autoNotes';
}
