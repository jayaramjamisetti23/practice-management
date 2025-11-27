import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'employees',
                loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'activities',
                loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)
            },
            {
                path: 'patients',
                loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'appointments',
                loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
            },
            {
                path: 'templates',
                loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
            },
            {
                path: 'flowboard',
                loadChildren: () => import('./flowboard/flowboard.module').then(m => m.FlowboardModule)
            },
            {
                path: 'schedules',
                loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule)
            },

            // 🔥 Default page AFTER login
            { path: '', redirectTo: 'employees', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
