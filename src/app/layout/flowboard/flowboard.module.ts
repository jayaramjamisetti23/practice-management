import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowboardRoutingModule } from './flowboard-routing.module';
import { FlowboardComponent } from './flowboard.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FlowboardComponent
  ],
  imports: [
    CommonModule,
    FlowboardRoutingModule,
    SharedModule
  ]
})
export class FlowboardModule { }
