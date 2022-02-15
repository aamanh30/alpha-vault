import { UserService } from '../../../../core/services/user/user.service';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../../../../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {
  constructor(
    protected override http: HttpClient,
    private userService: UserService
  ) {
    super(http);
  }

  signUp(data: any): Observable<any> {
    const url = `${environment.baseUrl}/auth-service/sign-up`;
    this.storeDetails(data);
    // return this.post(url, data);
    return of(data);
  }

  signIn(data: any): Observable<any> {
    const url = `${environment.baseUrl}/auth-service/sign-in`;
    this.storeDetails(data);
    // return this.post(url, data);
    return of(data);
  }

  forgotPassword(data: any): Observable<any> {
    const url = `${environment.baseUrl}/auth-service/forgot-password`;
    this.clearDetails();
    // return this.post(url, data);
    return of(data);
  }

  signOut(): Observable<any> {
    localStorage.clear();
    return of(true);
  }

  storeDetails(data: any): void {
    localStorage.setItem('alpha-vault-user', JSON.stringify(data));
    this.userService.updateUser(data);
  }

  clearDetails() {
    localStorage.removeItem('alpha-vault-user');
    this.userService.updateUser(null);
  }
}
