import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import { coins } from './../../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
    this.slug = 'common';
  }

  getCoinDetails(id: number): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}/crypto-coin/${id}`;
    return this.get(url);
  }

  searchCoinDetails(coinName: string): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}/find-crypto-coin-list/${coinName}`;
    return this.get(url).pipe(map(({ data }) => data));
  }
}
