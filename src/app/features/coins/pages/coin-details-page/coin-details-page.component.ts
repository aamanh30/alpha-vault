import { CoinService } from './../../services/coin/coin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => this.loadCoin(Number(id)));
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
        coin => {
          this.loading = false;
          this.coin = coin;
        },
        err => {
          this.loading = false;
          this.router.navigate([`/error/404`]);
        }
      );
  }
}
