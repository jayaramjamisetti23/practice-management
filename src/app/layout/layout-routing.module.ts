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
                loadChildren: () => import('../screens/employees/employees.module').then(m => m.EmployeesModule)
            },
            {
                path: 'users',
                loadChildren: () => import('../screens/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'activities',
                loadChildren: () => import('../screens/activities/activities.module').then(m => m.ActivitiesModule)
            },
            {
                path: 'patients',
                loadChildren: () => import('../screens/patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'appointments',
                loadChildren: () => import('../screens/appointments/appointments.module').then(m => m.AppointmentsModule)
            },
            {
                path: 'templates',
                loadChildren: () => import('../screens/templates/templates.module').then(m => m.TemplatesModule)
            },
            {
                path: 'flowboard',
                loadChildren: () => import('../screens/flowboard/flowboard.module').then(m => m.FlowboardModule)
            },
            {
                path: 'schedules',
                loadChildren: () => import('../screens/schedules/schedules.module').then(m => m.SchedulesModule)
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
