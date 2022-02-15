import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _user = new BehaviorSubject(null);
  constructor() {}

  updateUser(user: any): void {
    this._user.next(user);
  }

  getUser(): Observable<any> {
    return this._user.asObservable();
  }

  checkUser(): void {
    let user = localStorage.getItem('alpha-vault-user');
    if (!user) {
      return;
    }
    user = JSON.parse(user);
    this.updateUser(user);
  }
}
