import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<mat-sidenav-container>
    <mat-sidenav mode="side" opened>
      <mat-nav-list>
        <a mat-list-item routerLink="/employees">Employees</a>
        <a mat-list-item routerLink="/roles">Roles</a>
        <a mat-list-item routerLink="/activities">Activities</a>
      </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content>
      <ng-content></ng-content>
    </mat-sidenav-content>
  </mat-sidenav-container>`
})
export class SidebarComponent { }
