import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';

import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { PageBase } from '../../../../core/base';
import { AvxService } from '../../services/avx/avx.service';
import { ChartTypes } from '../../../charts/models';

@Component({
  selector: 'alpha-vault-portfolio-dashboard-page',
  templateUrl: './portfolio-dashboard-page.component.html',
  styleUrls: ['./portfolio-dashboard-page.component.scss']
})
export class PortfolioDashboardPageComponent
  extends PageBase
  implements OnInit, OnDestroy
{
  loading: boolean = false;
  form: FormGroup = new FormGroup({});
  portfolioDashboardConfig: any = null;
  categories: any[] = [];
  customPortfolios$: Observable<any[]> | undefined;
  alphaVaultPortfolios$: Observable<any[]> | undefined;
  chartTypes = ChartTypes;
  constructor(
    private router: Router,
    private portfolioService: PortfolioService,
    private portfolioFormService: PortfolioFormService,
    private animationService: AnimationService,
    private avxService: AvxService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.portfolioFormService.getPortfolioReportForm();
    this.loadContent();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadContent(): void {
    this.loading = true;
    combineLatest([
      this.portfolioService.getPortfolioDashboardDetails(),
      this.portfolioService.getPortfolioInvestments(),
      this.avxService.getAVXTokenBalance(),
      this.portfolioService.getPortfolioUserInvestments()
    ])
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([config, investments, avxHoldingsDetails, userInvestments]) => {
          const customPortfolios = userInvestments.filter(
            ({ isAdmin }: any) => !isAdmin
          );
          const alphaVaultPortfolios = userInvestments.filter(
            ({ isAdmin }: any) => isAdmin
          );
          this.loading = false;
          this.customPortfolios$ = this.formatPortfolios(
            customPortfolios,
            investments
          );
          this.alphaVaultPortfolios$ = this.formatPortfolios(
            alphaVaultPortfolios,
            investments
          );
          this.portfolioDashboardConfig = this.portfolioPerformanceDetails(
            {
              ...config,
              avxHoldingsDetails
            },
            [...alphaVaultPortfolios, ...customPortfolios],
            investments
          );
        },
        ({ error }: any) => {
          this.loading = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }

  formatPortfolios(
    portfolios: any,
    investments: Map<string, any>
  ): Observable<any[]> {
    portfolios = portfolios.map((portfolio: any) => {
      const { investmentAmount = null } =
        investments.get(`${portfolio.id}`) || {};
      return { ...portfolio, investmentAmount };
    });

    return of(portfolios);
  }

  portfolioPerformanceDetails(
    config: any,
    portfolios: any[],
    investments: Map<string, any>
  ): any {
    const data: any = [
      {
        label: config?.avxHoldingsDetails?.title,
        value: config?.avxHoldingsDetails?.amount
      }
    ];
    let createdPrice = 0,
      currentPrice = 0;
    portfolios.forEach(({ id, totalCreatedPrice, totalCurrentPrice, name }) => {
      createdPrice += totalCreatedPrice;
      currentPrice += totalCurrentPrice;
      if (investments.has(`${id}`)) {
        data.push({
          label: name,
          value: investments.get(`${id}`)?.investmentAmount
        });
      }
    });
    const percentage =
      currentPrice && createdPrice
        ? (((currentPrice - createdPrice) / createdPrice) * 100).toFixed(2)
        : null;
    const amount = Array.from(investments.values()).reduce(
      (total, current) => (total += current.investmentAmount),
      config.avxHoldingsDetails?.portfolios[0]?.amount || 0
    );
    return {
      ...config,
      portfolioPerformanceDetails: {
        ...config.portfolioPerformanceDetails,
        percentage,
        amount,
        isTrending:
          createdPrice === currentPrice ? null : createdPrice < currentPrice
      },
      portfolioAllocationDetails: {
        ...config.portfolioAllocationDetails,
        data
      }
    };
  }

  getPortfolioValue({ differentPercentage: value }: any): null | string {
    return isNaN(value) ? null : value.toFixed(2);
  }

  openPortfolioDetails({ id }: any): void {
    this.router.navigate([`portfolio/details/${id}`]);
  }
}
