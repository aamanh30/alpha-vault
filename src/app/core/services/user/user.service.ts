import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _user = new BehaviorSubject(null);
  _walletBalance = new BehaviorSubject(0);
  constructor() {}

  updateUser(user: any): void {
    localStorage.setItem('alpha-vault-user', JSON.stringify(user));
    this._user.next(user);
  }

  getWalletBalance(): Observable<any> {
    return this._walletBalance.asObservable();
  }

  getWalletBalanceValue(): number {
    return this._walletBalance.getValue();
  }

  updateWalletBalance(balance: number): void {
    this._walletBalance.next(balance);
  }

  getUser(): Observable<any> {
    return this._user.asObservable();
  }

  getAdminEmails(): Observable<string[]> {
    return of(environment.adminEmails);
  }

  checkUser(): void {
    let user = localStorage.getItem('alpha-vault-user');
    if (!user) {
      return;
    }
    user = JSON.parse(user);
    this.updateUser(user);
  }

  signOut(): Observable<any> {
    this._user.next(null);
    localStorage.clear();
    return of(true);
  }
}
