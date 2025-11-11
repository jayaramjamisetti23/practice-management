import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 👈 import this
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

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

//services
import { DataService } from './services/Data/data.service';


//models


import { RxjspracticeComponent } from './components/rxjspractice/rxjspractice.component';

import { InjectionToken } from '@angular/core';
import { APP_CONFIG } from './config/app.config';

export const APP_CONFIG_TOKEN = new InjectionToken('AppConfig');

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
    ErrorComponent
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
    MatIconModule
  ],//modules
  providers: [
    DataService,
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG }
  ],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
