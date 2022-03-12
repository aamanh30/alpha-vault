import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HomeService } from './../../services/home/home.service';
import { PortfolioService } from './../../../portfolio/services/portfolio/portfolio.service';

@Component({
  selector: 'alpha-vault-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  submitted: boolean = false;
  unsubscribe: Subject<any> = new Subject<any>();
  createYouOwnPortfolioDetails: any = null;
  portfolios: any[] = [];
  constructor(
    private homeService: HomeService,
    private portfolioService: PortfolioService
  ) {}

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
            //console.log(portfolios);
          }, 1000);
        },
        (err: any) => {
          this.loading = false;
          this.createYouOwnPortfolioDetails = null;
          this.portfolios = [];
        }
      );
  }
}
