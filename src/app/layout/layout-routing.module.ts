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
                path: 'create_appointments',
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
            {
                path: 'roles',
                loadComponent: () => import('./roles/roles.component').then(m => m.RolesComponent)
            },
            {
                path: 'treatmentPlan',
                loadComponent: () => import('./treatment-plans/treatment-plans.component').then(m => m.TreatmentPlansComponent)
            },
            {
                path: 'reasons',
                loadComponent: () => import('./reasons/reasons.component').then(m => m.ReasonsComponent)
            },
            {
                path: 'adminSettings',
                loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
            },
            {
                path: 'availablePrompts',
                loadComponent: () => import('./available-prompts/available-prompts.component').then(m => m.AvailablePromptsComponent)
            },
            {
                path: 'autoNotes',
                loadComponent: () => import('./auto-notes/auto-notes.component').then(m => m.AutoNotesComponent)
            },
            {
                path: 'carriers',
                loadComponent: () => import('./carriers/carriers.component').then(m => m.CarriersComponent)
            },
            {
                path: 'forms',
                loadComponent: () => import('./forms/forms.component').then(m => m.FormsComponent)
            },
            {
                path: 'procedures',
                loadComponent: () => import('./procedures/procedures.component').then(m => m.ProceduresComponent)
            },
            {
                path: 'txPlans',
                loadComponent: () => import('./tx-plans/tx-plans.component').then(m => m.TxPlansComponent)
            },
            {
                path: 'drugs',
                loadComponent: () => import('./drugs/drugs.component').then(m => m.DrugsComponent)
            },
            {
                path: 'prescriptions',
                loadComponent: () => import('./prescriptions/prescriptions.component').then(m => m.PrescriptionsComponent)
            },
            {
                path: 'pharmacies',
                loadComponent: () => import('./pharmacies/pharmacies.component').then(m => m.PharmaciesComponent)
            },
            {
                path: 'insurance',
                loadComponent: () => import('./insurances/insurances.component').then(m => m.InsurancesComponent)
            },
            {
                path: 'laboratories',
                loadComponent: () => import('./laboratories/laboratories.component').then(m => m.LaboratoriesComponent)
            },
            {
                path: 'referrals',
                loadComponent: () => import('./referrals/referrals.component').then(m => m.ReferralsComponent)
            },
            {
                path: 'accounts',
                loadComponent: () => import('./accounts/accounts.component').then(m => m.AccountsComponent)
            },
            {
                path: 'clockify',
                loadComponent: () => import('./clockify/clockify.component').then(m => m.ClockifyComponent)
            },
            {
                path: 'imaging',
                loadComponent: () => import('./imaging/imaging.component').then(m => m.ImagingComponent)
            },
            {
                path: 'reports',
                loadComponent: () => import('./reports/reports.component').then(m => m.ReportsComponent)
            },
            {
                path: 'orthoForm',
                loadComponent: () => import('./ortho-form/ortho-form.component').then(m => m.OrthoFormComponent)
            },
            {
                path: 'insuranceClaim',
                loadComponent: () => import('./insurance-claim/insurance-claim.component').then(m => m.InsuranceClaimComponent)
            },
            {
                path: 'duesAndSubscriptions',
                loadComponent: () => import('./dues-and-subscriptions/dues-and-subscriptions.component').then(m => m.DuesAndSubscriptionsComponent)
            },
            {
                path: 'periocharts',
                loadComponent: () => import('./periocharts/periocharts.component').then(m => m.PeriochartsComponent)
            },
            {
                path: 'patientscreens',
                loadComponent: () => import('./patientscreens/patientscreens.component').then(m => m.PatientscreensComponent)
            },
            {
                path: 'purchaseHistories',
                loadComponent: () => import('./purchase-histories/purchase-histories.component').then(m => m.PurchaseHistoriesComponent)
            },
            {
                path: 'inventories',
                loadComponent: () => import('./inventories/inventories.component').then(m => m.InventoriesComponent)
            },
            {
                path: 'uploads',
                loadComponent: () => import('./uploads/uploads.component').then(m => m.UploadsComponent)
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
