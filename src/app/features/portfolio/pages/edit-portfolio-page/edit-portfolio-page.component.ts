import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { PortfolioBase } from './../../base/portfolio.base';
import { CoinService } from './../../../coins/services/coin/coin.service';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { HomeService } from '../../../home/services/home/home.service';
import {
  customPortfolioAdditionalDetailsConfig,
  transformPortfolioDetails
} from '../../configs';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-edit-portfolio-page',
  templateUrl: './edit-portfolio-page.component.html',
  styleUrls: ['./edit-portfolio-page.component.scss']
})
export class EditPortfolioPageComponent
  extends PortfolioBase
  implements OnInit, OnDestroy
{
  content$: Observable<string>;
  isAdmin$: Observable<boolean>;
  config: any = customPortfolioAdditionalDetailsConfig;
  constructor(
    protected router: Router,
    private route: ActivatedRoute,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService,
    protected portfolioService: PortfolioService,
    private homeService: HomeService,
    private animationService: AnimationService
  ) {
    super(router, portfolioFormService, coinService);
    this.content$ = this.homeService
      .getHomeDetails()
      .pipe(map(({ createPortfolioDetails: { content } }) => content));
    this.isAdmin$ = this.portfolioService.getPortfolioUserAdmin();
  }

  ngOnInit(): void {
    this.initForm();
    this.route.params.pipe(takeUntil(this.unsubscribe)).subscribe(({ id }) => {
      this.loadPortfolio(Number(id));
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadPortfolio(id: number): void {
    this.loading = true;
    this.portfolioService
      .getPortfolioDetails(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        portfolio => {
          if (!portfolio || portfolio.id !== id) {
            this.animationService.open(
              `Portfolio details for ${id} not found`,
              'error'
            );
            this.router.navigate([`/error/404`]);
            return;
          }
          if (!portfolio || !portfolio.isEditable) {
            this.animationService.open(
              `You don't have permission to edit portfolio details for ${id}`,
              'error'
            );
            this.router.navigate([`/error/403`]);
            return;
          }
          this.loading = false;
          portfolio = transformPortfolioDetails(portfolio);
          this.initForm(portfolio);
        },
        ({ error }) => {
          this.loading = false;
          this.animationService.open(error?.message, 'error');
          this.router.navigate([`/error/404`]);
        }
      );
  }

  saveDraft(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.portfolioService
      .savePortfolioDraft(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: any) => {
          console.log(`Res: `, res);
          this.router.navigate(['/portfolio/dashboard']);
        },
        (err: any) => {
          console.error(`Error: `, err);
        }
      );
  }

  investNow(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.portfolioService
      .createPortfolio(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([portfolio]: any) => {
          this.submitting = false;
          this.submitted = false;
          this.animationService.open(
            `Custom portfolio ${this.form?.value?.name} has been created successfully`
          );
          setTimeout(() => {
            this.router.navigate([
              `/portfolio/details/${portfolio?.protfolioId}`
            ]);
          }, 2000);
        },
        ({ error }: any) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
