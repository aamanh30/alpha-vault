import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PortfolioBase } from './../../base/portfolio.base';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioFormService } from '../../services/portfolio-form/portfolio-form.service';
import { CoinService } from './../../../coins/services/coin/coin.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { transformPortfolioDetails } from '../../configs';

@Component({
  selector: 'alpha-vault-portfolio-details-page',
  templateUrl: './portfolio-details-page.component.html',
  styleUrls: ['./portfolio-details-page.component.scss']
})
export class PortfolioDetailsPageComponent
  extends PortfolioBase
  implements OnDestroy
{
  investmentForm: FormGroup = new FormGroup({});
  isInvestmentConfirm: boolean = false;
  portfolioAlgorithmDetails$: Observable<any> | null = null;
  constructor(
    protected router: Router,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService,
    private route: ActivatedRoute,
    protected portfolioService: PortfolioService,
    private animationService: AnimationService
  ) {
    super(router, portfolioFormService, coinService);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe)).subscribe(({ id }) => {
      this.investmentForm =
        this.portfolioFormService.getPortfolioInvestmentForm({
          protfolioId: Number(id)
        });
      this.loadPortfolio(Number(id));
      this.portfolioAlgorithmDetails$ =
        this.portfolioService.getPortfolioAlgorithmDetails();
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

  showInvestmentConfirm(): void {
    this.submitted = true;
    if (this.investmentForm.invalid) {
      return;
    }
    this.isInvestmentConfirm = true;
  }

  investNow(): void {
    this.submitted = true;
    if (this.investmentForm.invalid) {
      return;
    }
    this.submitting = true;
    this.portfolioService
      .investPortfolio(this.investmentForm.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: any) => {
          this.submitting = false;
          this.submitted = false;
          this.animationService.open(
            `$${this.investmentForm?.value?.investmentAmount} has been invested successfully`
          );
          this.investmentForm.reset();
          setTimeout(() => {
            this.router.navigate([`/portfolio/dashboard`]);
          }, 2000);
        },
        ({ error }: any) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
