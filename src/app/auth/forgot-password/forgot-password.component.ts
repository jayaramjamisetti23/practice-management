import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  template: `<h2>Forgot Password</h2>
    <form>
      <input type="email" placeholder="Email" name="email" required>
      <button type="submit">Reset Password</button>
    </form>`
})
export class ForgotPasswordComponent {}
