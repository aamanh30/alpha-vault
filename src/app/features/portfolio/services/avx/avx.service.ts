import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import { avxHoldingsDetails } from './../../configs';
import { UserService } from '../../../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AvxService extends HttpService {
  constructor(protected http: HttpClient, private userService: UserService) {
    super(http);
    this.slug = `avx`;
  }

  getAVXTokenBalance(): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/${email}`;
        return this.get(url);
      }),
      map(({ data: amount }: any) => ({
        ...avxHoldingsDetails,
        amount,
        portfolios: avxHoldingsDetails.portfolios.map((portfolio, i) => ({
          ...portfolio,
          amount: !i ? amount : `$${amount}`
        })),
        columns: ['title', 'amount']
      }))
    );
  }

  buyAVX({ amount } = <any>{}): Observable<any> {
    let url = `${environment.baseUrl}${this.slug}/saveUpdate`;
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        return this.post(url, { email, amount });
      }),
      mergeMap(({ data }: any) => {
        url = `${environment.baseUrl}wallet/investment`;
        return this.post(url, {
          email: data.email,
          amount: data.amount
        });
      })
    );
  }
}
