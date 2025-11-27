import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
})
export class CommonTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { field: string; header: string; type?: 'text' | 'date' | 'badge' }[] = [];
}
