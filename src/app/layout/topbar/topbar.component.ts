import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `<mat-toolbar color="primary">
    <span>Practice Management</span>
    <span class="spacer"></span>
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>account_circle</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Profile</button>
      <button mat-menu-item (click)="logout()">Logout</button>
    </mat-menu>
  </mat-toolbar>`,
  styles: [`.spacer { flex: 1 1 auto; }`]
})
export class TopbarComponent {
  logout() {
    // Implement logout logic
  }
}
