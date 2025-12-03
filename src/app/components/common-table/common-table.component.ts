import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {

  }

  @Input() columns: any[] = [];
  @Input() type: string = '';
  @Input() apiCall!: string;
  @Input() apiResponseKey!: string;
  @Input() header!: string;

  @ViewChild('dt1') dt!: Table;

  data: any[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.loadTableData();
  }

  async loadData() {
    try {
      this.loading = true;
      const response: any = await this.apiService.request('GET', this.apiCall);
      this.data = response[this.apiResponseKey] || response[this.apiCall] || [];
    } catch (e) {
      console.error('API Error:', e);
    } finally {
      this.loading = false;
    }
  }


  loadTableData() {
    this.apiService.request("GET", this.apiCall).subscribe((res: any) => {
      this.data = res[this.apiResponseKey] || res[this.apiCall] || [];
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  onGlobalFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dt.filterGlobal(value, 'contains');
  }

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
    switch (status) {
      case 'Unqualified':
      case 'Inactive':
        return 'danger';
      case 'Qualified':
      case 'Active':
        return 'success';
      case 'New':
        return 'info';
      case 'Negotiation':
      case 'Pending':
        return 'warning';
      default:
        return undefined;
    }
  }
}
