import { CoinService } from './../../../coins/services/coin/coin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { PortfolioBase } from './../../base/portfolio.base';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioFormService } from '../../services/portfolio-form/portfolio-form.service';

@Component({
  selector: 'alpha-vault-portfolio-details-page',
  templateUrl: './portfolio-details-page.component.html',
  styleUrls: ['./portfolio-details-page.component.scss']
})
export class PortfolioDetailsPageComponent
  extends PortfolioBase
  implements OnDestroy
{
  constructor(
    protected router: Router,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService,
    private route: ActivatedRoute,
    protected portfolioService: PortfolioService
  ) {
    super(router, portfolioFormService, coinService);
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => this.loadPortfolio(Number(id)));
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
          this.loading = false;
          this.initForm(portfolio);
        },
        err => {
          this.loading = false;
          this.router.navigate([`/error/404`]);
        }
      );
  }

  investNow(): void {
    this.router.navigate(['/payment/connect']);
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(`INVEST: `, this.form.value);
  }
}
