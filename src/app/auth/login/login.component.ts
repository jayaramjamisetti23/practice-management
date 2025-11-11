import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `<h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <input type="text" placeholder="Username" [(ngModel)]="username" name="username" required>
      <input type="password" placeholder="Password" [(ngModel)]="password" name="password" required>
      <button mat-raised-button color="primary" type="submit">Login</button>
    </form>
    <div *ngIf="error" style="color:red">{{error}}</div>`
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/employees']),
      error: err => this.error = 'Login failed!'
    });
  }
}
