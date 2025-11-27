import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private tokenKey = 'auth_token';
    private loginDataKey = 'loginCredentials';
    private rolePermissionsKey = "rolePermissions";

    private token: string | null = null;
    private rolePermissions: any | {};
    private loginUserData: any | {};


    constructor(private router: Router) { }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem(this.tokenKey, token);
    }

    setRolePermissions(rolePermissions: any) {
        this.rolePermissions = rolePermissions;
        localStorage.setItem(this.rolePermissionsKey, JSON.stringify(rolePermissions));
    }

    setLoginCredentials(loginUserData: any) {
        if (loginUserData?.accessToken) this.setToken(loginUserData.accessToken);
        if (loginUserData?.rolePermissions) this.setRolePermissions(loginUserData.rolePermissions);

        this.loginUserData = loginUserData;
        localStorage.setItem(this.loginDataKey, JSON.stringify(loginUserData));
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    getRolePermissions(): any {
        const data = localStorage.getItem(this.rolePermissionsKey);
        return data ? JSON.parse(data) : {};
    }

    getLoginCredentials(): any {
        const data = localStorage.getItem(this.loginDataKey);
        return data ? JSON.parse(data) : {};
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
        localStorage.removeItem(this.rolePermissionsKey);
        localStorage.removeItem(this.loginDataKey);
        this.router.navigate(['/login']);
    }
}
