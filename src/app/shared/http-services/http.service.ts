import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IHttpParams } from '../interfaces/http.interface';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private httpHeaders = new HttpHeaders();
  constructor(private readonly httpClient: HttpClient) {
    // TODO: append default headers, will need to be updated later
    this.httpHeaders.append('Content-Type', 'application/json');
  }

  public get<T>(url: string, httpParams?: IHttpParams): Observable<T> {
    const params = this.getParams(httpParams);
    return this.httpClient
      .get<T>(url, { params, headers: this.httpHeaders })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public post<T>(
    url: string,
    body: T,
    httpParams?: IHttpParams,
  ): Observable<T> {
    const params = this.getParams(httpParams);
    return this.httpClient
      .post<T>(url, body, { params, headers: this.httpHeaders })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public patch<T>(
    url: string,
    body: T,
    httpParams?: IHttpParams,
  ): Observable<T> {
    const params = this.getParams(httpParams);
    return this.httpClient
      .patch<T>(url, body, { params, headers: this.httpHeaders })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public put<T>(url: string, body: T, httpParams?: IHttpParams): Observable<T> {
    const params = this.getParams(httpParams);
    return this.httpClient
      .put<T>(url, body, { params, headers: this.httpHeaders })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public delete<T>(url: string, httpParams?: IHttpParams): Observable<T> {
    const params = this.getParams(httpParams);
    return this.httpClient
      .delete<T>(url, { params, headers: this.httpHeaders })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private getParams(params?: IHttpParams): HttpParams {
    const httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key]) {
          httpParams.append(key, params[key]);
        }
      });
    }

    return httpParams;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error(error.message));
  }
}
