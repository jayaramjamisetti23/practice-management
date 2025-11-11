import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';

@NgModule({
    declarations: [EmployeesComponent],
    imports: [CommonModule, RouterModule],
})
export class EmployeesModule { }
