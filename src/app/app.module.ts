import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 👈 import this
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

//PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { DecoratorsCompComponent, ChildComponent, ParentComponent } from './components/decorators-comp/decorators-comp.component';
import { BindingComponent } from './components/binding/binding.component';
import { HighlightDirective, ThreeComponent } from './components/three/three.component';
import { LifeCycleMethodExpComponent } from './components/life-cycle-method-exp/life-cycle-method-exp.component';
import { ErrorComponent } from './components/error/error.component';


import { EmployeesComponent } from './layout/employees/employees.component';
// import { RolesComponent } from './layout/roles/roles.component';
import { ActivitiesComponent } from './layout/activities/activities.component';
import { UsersComponent } from './layout/users/users.component';
import { AppointmentsComponent } from './layout/appointments/appointments.component';
import { TemplatesComponent } from './layout/templates/templates.component';
import { FlowboardComponent } from './layout/flowboard/flowboard.component';
import { SchedulesComponent } from './layout/schedules/schedules.component';
import { PatientsComponent } from './layout/patients/patients.component';
//services
import { DataService } from './services/Data/data.service';


//models

import { HttpClientModule } from '@angular/common/http';   // ✅ REQUIRED


import { RxjspracticeComponent } from './components/rxjspractice/rxjspractice.component';

import { InjectionToken } from '@angular/core';
import { APP_CONFIG } from './config/app.config';
import { APP_APICALLS } from './apicalls/app.apicalls';


export const APP_CONFIG_TOKEN = new InjectionToken('AppConfig');
export const APP_APICALLS_TOKEN = new InjectionToken('AppApiCalls');

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HighlightDirective,
    DecoratorsCompComponent,
    LifeCycleMethodExpComponent,
    BindingComponent,
    RxjspracticeComponent,
    EmployeesComponent,
    // RolesComponent,
    ActivitiesComponent,
    ErrorComponent,
    UsersComponent,
    AppointmentsComponent,
    TemplatesComponent,
    FlowboardComponent,
    SchedulesComponent,
    PatientsComponent
  ],//components
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    MenubarModule,
    SidebarModule,
    CardModule,
    ChildComponent,
    ParentComponent,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,

    HttpClientModule,
    ToastModule,
  ],//modules
  providers: [
    DataService,
    MessageService,
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
    { provide: APP_APICALLS_TOKEN, useValue: APP_APICALLS }
  ],//services
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }