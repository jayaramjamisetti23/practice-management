import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { HighlightDirective, ThreeComponent } from './components/three/three.component';

//services


//models


//PrimeNG Modules
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HighlightDirective
  ],//components
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],//modules
  providers: [],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
