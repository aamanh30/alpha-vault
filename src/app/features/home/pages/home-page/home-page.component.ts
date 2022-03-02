import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HomeService } from '../../services/home/home.service';
import { PortfolioService } from './../../../portfolio/services/portfolio/portfolio.service';

@Component({
  selector: 'alpha-vault-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  loading: boolean = false;
  portfolios: any[] = [];
  howItWorksDetails: any = null;
  createPortfolioDetails: any = null;
  avxDetails: any = null;

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
    const portfolio$ = this.portfolioService.getPortfolios();
    const homeDetails$ = this.homeService.getHomeDetails();
    combineLatest([portfolio$, homeDetails$])
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([
          { portfolios },
          { howItWorksDetails, createPortfolioDetails, avxDetails }
        ]: any) => {
          setTimeout(() => {
            this.loading = false;
            this.portfolios = portfolios;
            this.howItWorksDetails = howItWorksDetails;
            this.createPortfolioDetails = createPortfolioDetails;
            this.avxDetails = avxDetails;
          }, 1000);
        },
        err => {
          this.loading = false;
          this.portfolios = [];
          this.howItWorksDetails = null;
          this.createPortfolioDetails = null;
          this.avxDetails = null;
        }
      );
  }
}
