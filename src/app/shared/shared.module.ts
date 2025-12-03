import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { CommonTableComponent } from '../components/common-table/common-table.component';
import { FormModalComponent } from '../components/form-modal/form-modal.component';
import { BadgeComponent } from '../components/badge/badge.component';

@NgModule({
  declarations: [
    CommonTableComponent,
    FormModalComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    TagModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    CommonTableComponent,
    FormModalComponent,
    BadgeComponent,
    TableModule,
    InputTextModule,
    TagModule,
    DialogModule,
    ButtonModule
  ]
})
export class SharedModule { }
