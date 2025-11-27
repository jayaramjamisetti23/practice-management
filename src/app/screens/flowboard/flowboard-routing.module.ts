import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowboardComponent } from './flowboard.component';

const routes: Routes = [{ path: '', component: FlowboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowboardRoutingModule { }
