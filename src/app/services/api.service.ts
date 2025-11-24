import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from '../config/app.config';
import { APP_APICALLS } from '../apicalls/app.apicalls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // ---------------------------
  // Get logged-in user token
  // ---------------------------
  private getLoggedInUserHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CustomHeader': Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const userData = localStorage.getItem('loginCredentials');

    if (userData) {
      const parsed = JSON.parse(userData);
      headers = headers.set('Authorization', `Bearer ${parsed.accessToken}`);
    }

    return headers;
  }

  // ---------------------------
  // Common hospital data merge
  // ---------------------------
  private addHospitalData(method: string, body: any, type?: string): any {
    if (!body) return body;

    if ((method === 'POST' || method === 'PUT') && type !== 'upload') {
      let hspData: any = localStorage?.HospitalData
        ? JSON.parse(localStorage.HospitalData)
        : {};

      if (localStorage?.ClinicData && method === 'POST' && !body.clinicId) {
        body.clinicId = JSON.parse(localStorage.ClinicData);
      }

      if (body?.patientId?.clinicId?._id) {
        body.clinicId = body.patientId.clinicId;
      }

      body.hospitalId = body.hospitalId || hspData;
      body.hospitalName = body.hospitalName || hspData;
      body.hospitalIdSearch = body.hospitalIdSearch || hspData.hospitalID;
    }

    return body;
  }

  // ---------------------------
  // Upload handling
  // ---------------------------
  private handleUpload(type: string, body: any, multi?: boolean): FormData | null {
    if (type !== 'upload') return null;

    const formData = new FormData();

    if (body && !multi) {
      formData.append('file', body);
      if (body.defaultData) {
        for (const key in body.defaultData) {
          formData.append(key, body.defaultData[key]);
        }
      }
    }

    if (body && multi) {
      body.forEach((file: any) => formData.append('file', file));
    }

    if (body?.files) {
      for (let f of body.files) formData.append('file', f);
    }

    return formData;
  }

  // ---------------------------
  // Main fetch Method
  // ---------------------------
  request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    body?: any,
    type?: string,
    multi?: boolean
  ): Observable<any> {

    let headers = this.getLoggedInUserHeaders();
    const fullUrl = `${APP_CONFIG.apiUrl}${url}`;

    // Special case: login
    if (url === 'auth/login') {
      return this.http.post(fullUrl, body);
    }

    // add hospitalData
    body = this.addHospitalData(method, body, type);

    // upload management
    const uploadData = this.handleUpload(type!, body, multi);

    if (uploadData) {
      headers = headers.delete('Content-Type'); // multipart fix
      return this.http.post(fullUrl, uploadData, { headers });
    }

    // Non-upload requests
    if (method === 'GET' || method === 'DELETE') {
      return this.http.request(method, fullUrl, { headers });
    }

    return this.http.request(method, fullUrl, {
      headers,
      body: JSON.stringify(body)
    });
  }
}
