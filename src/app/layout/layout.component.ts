import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-topbar></app-topbar>
    <app-sidebar>
      <router-outlet></router-outlet>
    </app-sidebar>`
})
export class LayoutComponent {}
