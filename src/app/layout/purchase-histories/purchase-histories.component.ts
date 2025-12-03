import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-purchase-histories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './purchase-histories.component.html',
  styleUrls: ['./purchase-histories.component.scss']
})
export class PurchaseHistoriesComponent {
  tableFields: any[] = [
    { field: 'id', header: 'ID', type: 'text' },
    { field: 'productName', header: 'Product', type: 'text' },
    { field: 'quantity', header: 'Quantity', type: 'text' },
    { field: 'purchaseDate', header: 'Purchase Date', type: 'date' }
  ];

  type: string = 'filter';
  header: string = 'Purchase Histories';
  apiCall: string = APP_APICALLS.purchaseHistories || '/purchaseHistories';
  apiResponseKey: string = 'purchases';
}
