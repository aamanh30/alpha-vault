import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http/http.service';
import {
  reportGenerationDetails,
  bucketHoldingsDetails,
  alphaHoldingsDetails,
  portfolioPerformanceDetails,
  portfolioAllocationDetails,
  getPortfolioThumbnail,
  tradingAlgorithmsConfig
} from './../../configs';
import { UserService } from '../../../../core/services/user/user.service';

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
          percentage: isNaN(portfolio?.differentPercentage)
            ? null
            : portfolio?.differentPercentage.toFixed(2),
          isTrending: !portfolio?.differentPercentage
            ? null
            : portfolio?.differentPercentage > 0,
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
    return this.userService.getUser().pipe(
      mergeMap(({ email }) =>
        this.get(url).pipe(
          map(({ data }) => ({
            ...data,
            isEditable: [...environment.adminEmails, data.userEmail].includes(
              email
            )
          }))
        )
      )
    );
  }

  getPortfolioAlgorithmDetails(): Observable<any> {
    return of({ data: tradingAlgorithmsConfig }).pipe(map(({ data }) => data));
  }

  getPortfolioDashboardDetails(): Observable<any> {
    return of({
      reportGenerationDetails,
      bucketHoldingsDetails,
      alphaHoldingsDetails,
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
    id: portfolioId,
    name,
    coinHoldings,
    strategyType,
    rebalancing,
    holdTerm,
    buyType,
    description,
    shortDesc,
    color
  }: any): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email: userEmail, isAdmin = false }) => {
        const url = `${environment.baseUrl}${this.slug}/protfolio`;
        return this.post(url, {
          id: portfolioId,
          name,
          userEmail,
          isAdmin,
          strategyType,
          rebalancing,
          holdTerm,
          buyType,
          description,
          shortDesc,
          color
        });
      }),
      mergeMap(({ data: { id = null } }: any) => {
        const coinUrl = `${environment.baseUrl}${this.slug}/protfolio-coin-list`;
        const protfolioCoinList = coinHoldings.map((coinHolding: any) => ({
          ...coinHolding,
          protfolioId: id
        }));
        return this.post(coinUrl, {
          protfolioId: id,
          isNew: !!!portfolioId,
          protfolioCoinList
        }).pipe(map(({ data }: any) => data));
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
            .pipe(map(emails => emails.includes(email.toLowerCase())))
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
    let url = `${environment.baseUrl}${this.slug}/user-protfolio`;
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        return this.post(url, {
          id,
          protfolioId,
          userEmail: userEmail || email,
          investmentAmount,
          createdon
        });
      }),
      mergeMap(({ data }: any) => {
        url = `${environment.baseUrl}wallet/investment`;
        return this.post(url, {
          email: data.userEmail,
          amount: data.investmentAmount
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

  getPortfolioUserInvestments(): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/protfolio-list-all-user/${email}`;
        return this.get(url);
      }),
      map(({ data }) => data)
    );
  }
}
