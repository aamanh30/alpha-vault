import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import {
  portfolios,
  coinHoldingsConfig,
  categories,
  reportGenerationDetails,
  bucketHoldingsDetails,
  avxHoldingsDetails,
  portfolioPerformanceDetails,
  portfolioAllocationDetails
} from './../../configs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getPortfolios(): Observable<any> {
    const url = `${environment.baseUrl}/portfolio-service`;
    // return this.get(url);
    const portfolioList = portfolios.map((portfolio: any) => {
      const { coinHoldings } =
        coinHoldingsConfig.find(({ id }) => portfolio.id === id) || {};
      portfolio = {
        ...portfolio,
        coinHoldings: coinHoldings || []
      };
      return portfolio;
    });
    return of({ portfolios: portfolioList });
  }

  getPortfolioDetails(portfolioId: number): Observable<any> {
    const url = `${environment.baseUrl}/portfolio-service/details`;
    let portfolio: any = portfolios.find(({ id }) => portfolioId === id);
    if (portfolio) {
      const { coinHoldings } =
        coinHoldingsConfig.find(({ id }) => portfolioId === id) || {};
      portfolio = {
        ...portfolio,
        coinHoldings: coinHoldings || []
      };
    }
    return of(portfolio);
    // return this.get(url);
  }

  getPortfolioCategories(): Observable<any> {
    const url = `${environment.baseUrl}/portfolio-service/categories`;
    // return this.get(url);
    return of({ categories });
  }

  getPortfolioDashboardDetails(): Observable<any> {
    const url = `${environment.baseUrl}/portfolio-service/dashboard`;
    // return this.get(url);
    const bucketHoldings = {
      ...bucketHoldingsDetails,
      columns: bucketHoldingsDetails.portfolios.map((portfolio: any) =>
        Object.keys(portfolio).filter(
          key => key !== 'id' && key !== 'isTrending'
        )
      )[0]
    };

    const avxHoldings = {
      ...avxHoldingsDetails,
      columns: avxHoldingsDetails.portfolios.map((portfolio: any) =>
        Object.keys(portfolio).filter(
          key => key === 'title' || key === 'amount'
        )
      )[0]
    };

    return of({
      reportGenerationDetails,
      bucketHoldingsDetails: bucketHoldings,
      avxHoldingsDetails: avxHoldings,
      portfolioPerformanceDetails,
      portfolioAllocationDetails
    });
  }
}
