import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../config/app.config';
import { APP_APICALLS } from '../../apicalls/app.apicalls';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    hidePassword = true;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private api: ApiService,
        private toast: ToasterService,
        private auth: AuthService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(APP_CONFIG.passwordRegex)]],
            rememberMe: [false],
            entityType: APP_CONFIG.entityType,
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) return;
        const payload = this.loginForm.value;

        this.api.request('POST', APP_APICALLS.loginUser, payload).subscribe({
            next: (res) => {
                console.log('API Login Success:', res);

                // Your backend should return the token
                if (res?.accessToken) {
                    this.auth.setLoginCredentials({ accessToken: res.accessToken, ...res.details });
                    this.toast.success('Form submitted successfully!');
                    this.router.navigate([APP_CONFIG.defaultScreen]);
                } else if (res?.errorMessage) {
                    this.toast.error(res?.errorMessage);
                }

            },
            error: (err) => {
                this.toast.error(err?.error?.message || 'Invalid email or password');
            }
        });
    }
}
