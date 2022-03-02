import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  howItWorksDetails,
  createPortfolioDetails,
  avxDetails,
  createYouOwnPortfolioDetails
} from './../../config';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() {}

  getHomeDetails(): Observable<any> {
    const url = `${environment.baseUrl}/home-service`;
    // return this.get(url);
    return of({
      howItWorksDetails,
      createPortfolioDetails,
      avxDetails
    });
  }

  getHomeMainDetails(): Observable<any> {
    const url = `${environment.baseUrl}/home-service/main-details`;
    // return this.get(url);
    return of({
      createYouOwnPortfolioDetails
    });
  }
}
