import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  username = 'John Doe';

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();        // Clear localStorage or session
    this.router.navigate(['/login']);  // Redirect to login
  }
}
