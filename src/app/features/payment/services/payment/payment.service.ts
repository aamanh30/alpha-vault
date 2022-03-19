import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { HttpService } from '../../../../core/services/http/http.service';
import { walletInfo, wallets } from '../../config';
import { UserService } from '../../../../core/services/user/user.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends HttpService {
  _paymentDetails = new BehaviorSubject(null);

  constructor(
    protected override http: HttpClient,
    private userService: UserService
  ) {
    super(http);
    this.slug = 'wallet';
  }

  updatePaymentDetails(data: any): void {
    this._paymentDetails.next(data);
  }

  getPaymentDetails(): Observable<any> {
    return this._paymentDetails.asObservable();
  }

  getWallets(): Observable<any> {
    return of(wallets);
  }

  getWalletBalance(): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/${email}`;

        return of({
          data: {
            heading: walletInfo.heading,
            subHeading: walletInfo.subHeading,
            currency: walletInfo.currency,
            amount: 5500
          }
        });
        //return this.get(url);
      }),
      map(res => {
        console.log(res);
        return res.data;
      })
    );
  }

  topUpWallet({ amount } = <any>{}): Observable<any> {
    return this.userService.getUser().pipe(
      mergeMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/topup`;
        return this.post(url, { email, amount });
      })
    );
  }

  getUserWallet(email: string): Observable<any> {
    let url = `${environment.baseUrl}${this.slug}/${email}`;
    return this.get(url).pipe(
      switchMap(
        ({ data: { amount } }) => amount,
        map(amount => {
          if (amount !== null || amount !== undefined) {
            return true;
          }
          url = `${environment.baseUrl}${this.slug}/saveUpdate`;
          return this.post(url, { email, amount: 0 }).pipe(
            map(({ data }: any) => true)
          );
        })
      )
    );
  }
}
