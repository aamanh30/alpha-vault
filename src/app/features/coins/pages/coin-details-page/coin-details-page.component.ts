import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../../core/base';
import { CoinService } from './../../services/coin/coin.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { ChartTypes } from '../../../charts/models';

@Component({
  selector: 'alpha-vault-coin-details-page',
  templateUrl: './coin-details-page.component.html',
  styleUrls: ['./coin-details-page.component.scss']
})
export class CoinDetailsPageComponent
  extends PageBase
  implements OnInit, OnDestroy
{
  coin: any;
  chartTypes = ChartTypes;
  data: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService,
    private animationService: AnimationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => this.loadCoin(id));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadCoin(id: number): void {
    this.loading = true;
    this.coinService
      .getCoinDetails(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ data }) => {
          if (!data) {
            this.animationService.open(
              `Coin details for ${id} not found`,
              'error'
            );
            this.router.navigate([`/error/404`]);
            return;
          }
          this.loading = false;
          this.coin = data;
          this.formatData(data.tickers || {});
        },
        err => {
          this.loading = false;
          this.router.navigate([`/error/404`]);
        }
      );
  }

  formatData({
    usd_percent_change_1h,
    usd_percent_change_12h,
    usd_percent_change_24h,
    usd_percent_change_7d,
    usd_percent_change_30d,
    usd_percent_change_1y,
    usd_price
  }: any): void {
    this.data = [
      {
        label: '1 year',
        value: usd_percent_change_1y
      },
      {
        label: '1 month',
        value: usd_percent_change_30d
      },
      {
        label: '1 week',
        value: usd_percent_change_7d
      },
      {
        label: '1 day',
        value: usd_percent_change_24h
      },
      {
        label: '12 hours',
        value: usd_percent_change_12h
      },
      {
        label: '1 hour',
        value: usd_percent_change_1h
      }
    ];
  }
}
