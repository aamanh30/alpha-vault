import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import { coins } from './../../config';

@Injectable({
  providedIn: 'root'
})
export class CoinService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getCoinDetails(coinId: number): Observable<any> {
    const url = `${environment.baseUrl}/coin-service/${coinId}`;
    const coin: any = coins.find(({ id }) => coinId === id);

    return of(coin);
    // return this.get(url);
  }

  searchCoinDetails(coinTitle: string): Observable<any> {
    const url = `${environment.baseUrl}/coin-service`;
    let params = new HttpParams();
    params = params.set('search', coinTitle);

    const coinsList = coins.filter(({ title }: any) =>
      title.match(new RegExp(coinTitle, 'ig'))
    );
    return of(coinsList);
    // return this.get(url);
  }
}
