import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../../core/base';
import { HomeService } from './../../services/home/home.service';
import { PortfolioService } from './../../../portfolio/services/portfolio/portfolio.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends PageBase implements OnInit, OnDestroy {
  loading: boolean = false;
  submitted: boolean = false;
  unsubscribe: Subject<any> = new Subject<any>();
  createYouOwnPortfolioDetails: any = null;
  portfolios: any[] = [];
  constructor(
    private homeService: HomeService,
    private portfolioService: PortfolioService,
    private animationService: AnimationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadContent();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadContent(): void {
    this.loading = true;
    const yourPortfolioDetails$ = this.homeService.getHomeMainDetails();
    const portfolios$ = this.portfolioService.getPortfolios();
    combineLatest([yourPortfolioDetails$, portfolios$])
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([{ createYouOwnPortfolioDetails }, { portfolios }]: any) => {
          setTimeout(() => {
            this.loading = false;
            this.createYouOwnPortfolioDetails = createYouOwnPortfolioDetails;
            this.portfolios = portfolios;
          }, 1000);
        },
        ({ error }: any) => {
          this.loading = false;
          this.createYouOwnPortfolioDetails = null;
          this.portfolios = [];
          this.animationService.open(error?.message, 'error');
        }
      );
  }

  openPortfolio(id: number): void {
    this.router.navigate([`/portfolio/details/${id}`]);
  }
}
