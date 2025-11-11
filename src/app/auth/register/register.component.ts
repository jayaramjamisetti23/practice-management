import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `<h2>Register</h2>
    <form>
      <input type="text" placeholder="Username" name="username" required>
      <input type="password" placeholder="Password" name="password" required>
      <button type="submit">Register</button>
    </form>`
})
export class RegisterComponent {}
