import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 👈 import this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { DecoratorsCompComponent, ChildComponent, ParentComponent } from './components/decorators-comp/decorators-comp.component';
import { BindingComponent } from './components/binding/binding.component';
import { HighlightDirective, ThreeComponent } from './components/three/three.component';
import { LifeCycleMethodExpComponent } from './components/life-cycle-method-exp/life-cycle-method-exp.component';

//services
import { DataService } from './services/Data/data.service';


//models


//PrimeNG Modules
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HighlightDirective,
    DecoratorsCompComponent,
    LifeCycleMethodExpComponent,
    BindingComponent
  ],//components
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChildComponent,
    ParentComponent,
    FormsModule
  ],//modules
  providers: [DataService],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
