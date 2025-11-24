import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../config/app.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    hidePassword = true;

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            rememberMe: [false],
            entityType: APP_CONFIG.entityType,
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Login Successful:', this.loginForm.value);
            // 👉 Simulate successful login:
            localStorage.setItem('token', 'mock-token');
            this.router.navigate(['/employees']); // redirect to main app page
        }
    }
}
