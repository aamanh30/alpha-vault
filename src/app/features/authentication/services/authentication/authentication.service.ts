import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HttpService } from '../../../../core/services/http/http.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.slug = 'user/';
  }

  signUp(data: any): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}signup`;
    return this.post(url, data);
  }

  signIn(data: any): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}signin`;
    return this.post(url, data);
  }

  forgotPassword(data: any): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}forgot-password`;
    // return this.post(url, data);
    return of(data);
  }
}
