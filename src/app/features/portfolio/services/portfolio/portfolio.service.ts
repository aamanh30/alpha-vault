import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import {
  reportGenerationDetails,
  bucketHoldingsDetails,
  alphaVaultBucketHoldingsDetails,
  avxHoldingsDetails,
  portfolioPerformanceDetails,
  portfolioAllocationDetails,
  getPortfolioThumbnail
} from './../../configs';
import { UserService } from '../../../../core/services/user/user.service';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends HttpService {
  constructor(protected http: HttpClient, private userService: UserService) {
    super(http);
    this.slug = `common`;
  }

  getPortfolios(): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}/protfolio-details-list-all-admin`;
    return this.get(url).pipe(
      map(({ data }) => {
        const portfolios = data.map((portfolio: any) => ({
          ...portfolio,
          title: portfolio.name,
          type: portfolio.strategyType,
          percentage:
            portfolio.totalCreatedPrice && portfolio.totalCurrentPrice
              ? (
                  ((portfolio.totalCurrentPrice - portfolio.totalCreatedPrice) /
                    portfolio.totalCreatedPrice) *
                  100
                ).toFixed(2)
              : null,
          isTrending:
            portfolio.totalCreatedPrice === portfolio.totalCurrentPrice
              ? null
              : portfolio.totalCreatedPrice < portfolio.totalCurrentPrice,
          content: portfolio.shortDesc || portfolio.description,
          coinHoldings: (portfolio?.protfolioCoin || [])
            .sort(
              (
                { percentage: percentageA }: any,
                { percentage: percentageB }: any
              ) => (percentageA > percentageB ? -1 : 1)
            )
            .slice(0, 3)
            .map((coinHolding: any) => ({
              ...coinHolding,
              id: coinHolding?.coinId,
              icon: getPortfolioThumbnail(coinHolding?.coin),
              title: coinHolding?.coin?.name,
              percentage: coinHolding?.percentage,
              abbr: coinHolding?.coin?.symbol
            }))
        }));
        return { portfolios };
      })
    );
  }

  getPortfolioDetails(id: number): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}/protfolio-details-coin/${id}`;
    return this.get(url).pipe(map(({ data }) => data));
  }

  getPortfolioDashboardDetails(): Observable<any> {
    const bucketHoldings = {
      ...bucketHoldingsDetails,
      columns: ['name', 'totalCreatedPrice', 'investmentAmount']
    };

    const alphaHoldings = {
      ...alphaVaultBucketHoldingsDetails,
      columns: alphaVaultBucketHoldingsDetails.portfolios.map(
        (portfolio: any) => ['name', 'totalCreatedPrice', 'investmentAmount']
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
      alphaHoldingsDetails: alphaHoldings,
      avxHoldingsDetails: avxHoldings,
      portfolioPerformanceDetails,
      portfolioAllocationDetails
    });
  }

  savePortfolioDraft({ id, name, coinHoldings }: any): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email: userEmail, isAdmin = false }) => {
        const url = `${environment.baseUrl}${this.slug}/protfolio-draft`;
        return this.post(url, { id, name, userEmail, isAdmin });
      }),
      mergeMap(({ data: { id = null } }: any) => {
        const coinUrl = `${environment.baseUrl}${this.slug}/protfolio-coin`;
        return forkJoin(
          coinHoldings.map((coinHolding: any, i: number) =>
            this.post(coinUrl, { ...coinHolding, protfolioId: id })
          )
        );
      })
    );
  }

  createPortfolio({
    id,
    name,
    coinHoldings,
    strategyType,
    rebalancing,
    holdTerm,
    buyType
  }: any): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email: userEmail, isAdmin = false }) => {
        const url = `${environment.baseUrl}${this.slug}/protfolio`;
        return this.post(url, {
          id,
          name,
          userEmail,
          isAdmin,
          strategyType,
          rebalancing,
          holdTerm,
          buyType
        });
      }),
      mergeMap(({ data: { id = null } }: any) => {
        const coinUrl = `${environment.baseUrl}${this.slug}/protfolio-coin`;
        return forkJoin(
          coinHoldings.map((coinHolding: any, i: number) =>
            this.post(coinUrl, { ...coinHolding, protfolioId: id }).pipe(
              mergeMap(({ data }: any) => of(data))
            )
          )
        );
      })
    );
  }

  getPortfolioList(): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/protfolio-details-list-all`;
        return this.get(url).pipe(
          map(({ data }) =>
            data.filter((portfolio: any) => portfolio.userEmail === email)
          )
        );
      })
    );
  }

  getAlphaVaultPortfolios(): Observable<any> {
    const url = `${environment.baseUrl}${this.slug}/protfolio-details-list-all`;
    return this.get(url).pipe(
      map(({ data }) => data.filter((portfolio: any) => portfolio.isAdmin))
    );
  }

  getPortfolioUserAdmin(): Observable<boolean> {
    return this.userService
      .getUser()
      .pipe(
        switchMap(({ email }) =>
          this.userService
            .getAdminEmails()
            .pipe(map(emails => emails.includes(email)))
        )
      );
  }

  investPortfolio({
    id,
    protfolioId,
    userEmail,
    investmentAmount,
    createdon
  }: any): Observable<any> {
    return this.userService.getUser().pipe(
      mergeMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/user-protfolio`;
        return this.post(url, {
          id,
          protfolioId,
          userEmail: userEmail || email,
          investmentAmount,
          createdon
        });
      })
    );
  }

  getPortfolioInvestments(): Observable<Map<string, any>> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/user-protfolio-email/${email}`;
        return this.get(url).pipe(
          map(({ data }) => {
            const investmentMap = new Map();
            data.forEach((investment: any) => {
              if (investmentMap.has(`${investment.protfolioId}`)) {
                const { investmentAmount } = investmentMap.get(
                  `${investment.protfolioId}`
                );
                investment.investmentAmount += investmentAmount;
              }
              investmentMap.set(`${investment.protfolioId}`, investment);
            });

            return investmentMap;
          })
        );
      })
    );
  }
}
