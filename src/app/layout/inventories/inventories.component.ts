import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-inventories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'itemName', header: 'Item Name', type: 'text' },
    { field: 'quantity', header: 'Quantity', type: 'text' },
    { field: 'reorderLevel', header: 'Reorder Level', type: 'text' }
  ];

  type: string = 'filter';
  header: string = 'Inventories';
  apiCall: string = APP_APICALLS.inventories || '/inventories';
  apiResponseKey: string = 'inventory';
}
