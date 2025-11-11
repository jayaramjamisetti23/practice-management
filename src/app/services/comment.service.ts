import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APP_CONFIG } from '../config/app.config';

@Injectable({ providedIn: 'root' })
export class CommentService {
    private baseUrl = APP_CONFIG.apiBaseUrl + '/comments';

    constructor(private http: HttpClient) { }

    getComments(): Observable<any> {
        return this.http.get(this.baseUrl).pipe(
            catchError(this.handleError)
        );
    }

    addComment(comment: any): Observable<any> {
        return this.http.post(this.baseUrl, comment).pipe(
            catchError(this.handleError)
        );
    }

    updateComment(id: string, comment: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, comment).pipe(
            catchError(this.handleError)
        );
    }

    deleteComment(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        // Customize error handling as needed
        return throwError(() => error);
    }
}
