import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoinService } from './../../services/coin/coin.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-coin-details-page',
  templateUrl: './coin-details-page.component.html',
  styleUrls: ['./coin-details-page.component.scss']
})
export class CoinDetailsPageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  unsubscribe = new Subject();
  coin: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService,
    private animationService: AnimationService
  ) {}

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
        },
        err => {
          this.loading = false;
          this.router.navigate([`/error/404`]);
        }
      );
  }
}
