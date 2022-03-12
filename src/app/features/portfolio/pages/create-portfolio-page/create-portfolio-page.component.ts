import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { PortfolioBase } from './../../base/portfolio.base';
import { CoinService } from './../../../coins/services/coin/coin.service';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { HomeService } from '../../../home/services/home/home.service';
import { customPortfolioAdditionalDetailsConfig } from '../../configs';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-create-portfolio-page',
  templateUrl: './create-portfolio-page.component.html',
  styleUrls: ['./create-portfolio-page.component.scss']
})
export class CreatePortfolioPageComponent
  extends PortfolioBase
  implements OnInit, OnDestroy
{
  content$: Observable<string>;
  isAdmin$: Observable<boolean>;
  config: any = customPortfolioAdditionalDetailsConfig;
  constructor(
    protected router: Router,
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
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
        (error: any) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
