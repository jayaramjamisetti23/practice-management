import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private tokenKey = 'auth_token';
    private token: string | null = null;

    constructor(private router: Router) { }

    setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    login(username: string, password: string): Observable<boolean> {
        // Replace with real API call
        if (username === 'admin' && password === 'admin') {
            this.token = 'mock-token';
            return of(true);
        }
        return of(false);
    }

    isLoggedIn(): boolean {
        return !!this.token;
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
    }
}
