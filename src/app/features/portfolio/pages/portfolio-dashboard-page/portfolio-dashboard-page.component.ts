import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';

import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { PageBase } from '../../../../core/base';

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
  constructor(
    private router: Router,
    private portfolioService: PortfolioService,
    private portfolioFormService: PortfolioFormService,
    private animationService: AnimationService
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
      this.portfolioService.getPortfolioList(),
      this.portfolioService.getAlphaVaultPortfolios()
    ])
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([config, investments, customPortfolios, alphaVaultPortfolios]) => {
          this.loading = false;
          this.portfolioDashboardConfig = config;
          this.customPortfolios$ = this.formatPortfolios(
            customPortfolios,
            investments
          );
          alphaVaultPortfolios = alphaVaultPortfolios.filter(({ id }: any) =>
            investments.get(`${id}`)
          );
          this.alphaVaultPortfolios$ = this.formatPortfolios(
            alphaVaultPortfolios,
            investments
          );
        },
        (error: any) => {
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

  getPortfolioValue(cell: any): null | string {
    const value =
      ((cell.totalCurrentPrice - cell.totalCreatedPrice) /
        cell.totalCreatedPrice) *
      100;

    return isNaN(value) ? null : value.toFixed(2);
  }

  openPortfolioDetails({ id }: any): void {
    this.router.navigate([`portfolio/details/${id}`]);
  }
}
