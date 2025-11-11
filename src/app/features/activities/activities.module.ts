import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [CommonModule, RouterModule],
})
export class ActivitiesModule {}
