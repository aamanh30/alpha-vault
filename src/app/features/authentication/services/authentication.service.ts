import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
  }

  signUp(data: any): Observable<any> {
    const url = `${environment.baseUrl}/auth-service/sign-up`;
    return this.post(url, data);
  }

  signIn(data: any): Observable<any> {
    const url = `${environment.baseUrl}/auth-service/sign-in`;
    return this.post(url, data);
  }

  signOut(): Observable<any> {
    localStorage.clear();
    return of(true);
  }
}
