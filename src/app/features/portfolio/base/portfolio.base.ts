import { Router } from '@angular/router';
import { FormArray, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../core/base';
import { CoinService } from './../../coins/services/coin/coin.service';
import { getPortfolioThumbnail } from '../configs';
import { PortfolioFormService } from '../services/portfolio-form/portfolio-form.service';

export class PortfolioBase extends PageBase {
  coins$: any;
  form: FormGroup = new FormGroup({});

  constructor(
    protected router: Router,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService
  ) {
    super();
  }

  initForm(portfolio = {}): void {
    this.submitted = false;
    this.form = this.portfolioFormService.getPortfolioForm(portfolio);
    this.addSearchSubscription();
  }

  addSearchSubscription(): void {
    const cointNameControl = (this.form.controls.searchCoin as FormGroup).get(
      'name'
    );
    cointNameControl?.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this.unsubscribe)
      )
      .subscribe((name: string) => {
        if (!name || name.length <= 1) {
          return;
        }
        name = name.trim();
        this.coins$ = this.coinService.searchCoinDetails(name);
      });
  }

  onCoinSelect(coin: any): void {
    const searchCoin = {
      coinId: coin?.id,
      createdPrice: coin?.tickers?.usd_price,
      currentPrice: coin?.currentPrice,
      thumbnail: getPortfolioThumbnail(coin),
      id: null,
      percentage: null,
      protfolioId: null,
      name: coin?.name
    };
    this.form.get('searchCoin')?.patchValue(searchCoin);
  }

  onAddCoin(): void {
    if (this.form.controls.searchCoin.invalid) {
      return;
    }
    const coinHoldings: FormArray =
      this.portfolioFormService.addCoinHoldingGroup(this.form);

    this.form.setControl('coinHoldings', coinHoldings);
    this.form.controls?.searchCoin?.reset();
    this.form.controls?.searchCoin?.clearValidators();
    this.form.controls?.searchCoin?.updateValueAndValidity();
  }

  coinSelected({ coinId: id }: any): void {
    this.router.navigate([`/coins/coin-details/${id}`]);
  }

  coinRemoved(i: number): void {
    const coinHoldings: FormArray =
      this.portfolioFormService.removeCoinHoldingGroup(this.form, i);

    this.form.setControl('coinHoldings', coinHoldings);
  }

  onCoinUpdated(data: any): void {
    this.portfolioFormService.updateCoinHoldingsGroup(this.form, data);
  }
}
