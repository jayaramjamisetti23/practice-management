import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowboardRoutingModule } from './flowboard-routing.module';
import { FlowboardComponent } from './flowboard.component';


@NgModule({
  declarations: [
    FlowboardComponent
  ],
  imports: [
    CommonModule,
    FlowboardRoutingModule
  ]
})
export class FlowboardModule { }
