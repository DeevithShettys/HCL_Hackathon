import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // GET Request
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // POST Request
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // PUT Request
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // DELETE Request
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
