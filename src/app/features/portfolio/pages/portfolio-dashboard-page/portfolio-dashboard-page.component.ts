import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-vault-portfolio-dashboard-page',
  templateUrl: './portfolio-dashboard-page.component.html',
  styleUrls: ['./portfolio-dashboard-page.component.scss']
})
export class PortfolioDashboardPageComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  submitted: boolean = false;
  unsubscribe: Subject<any> = new Subject<any>();
  form: FormGroup = new FormGroup({});
  reportGenerationDetails: any = null;
  bucketHoldingsDetails: any = null;
  avxHoldingsDetails: any = null;
  portfolioPerformanceDetails: any = null;
  portfolioAllocationDetails: any = null;
  categories: any[] = [];
  portfolios: any[] = [];
  constructor(
    private router: Router,
    private portfolioService: PortfolioService,
    private portfolioFormService: PortfolioFormService
  ) {}

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
    this.portfolioService
      .getPortfolioDashboardDetails()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({
          reportGenerationDetails,
          bucketHoldingsDetails,
          avxHoldingsDetails,
          portfolioPerformanceDetails,
          portfolioAllocationDetails
        }: any) => {
          setTimeout(() => {
            this.loading = false;
            this.reportGenerationDetails = reportGenerationDetails;
            this.bucketHoldingsDetails = bucketHoldingsDetails;
            this.avxHoldingsDetails = avxHoldingsDetails;
            this.portfolioPerformanceDetails = portfolioPerformanceDetails;
            this.portfolioAllocationDetails = portfolioAllocationDetails;
          }, 1000);
        },
        (err: any) => {
          this.loading = false;
          this.reportGenerationDetails = null;
          this.bucketHoldingsDetails = null;
          this.avxHoldingsDetails = null;
          this.portfolioPerformanceDetails = null;
          this.portfolioAllocationDetails = null;
        }
      );
  }

  openPortfolioDetails({ id }: any): void {
    this.router.navigate([`portfolio/details/${id}`]);
  }
}
