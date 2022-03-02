import { CoinService } from './../../coins/services/coin/coin.service';
import { distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';
import { PortfolioFormService } from '../services/portfolio-form/portfolio-form.service';

export class PortfolioBase {
  submitted: boolean = false;
  loading: boolean = true;
  coins$: any;
  form: FormGroup = new FormGroup({});
  unsubscribe = new Subject();

  constructor(
    protected router: Router,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService
  ) {}

  initForm(portfolio = {}): void {
    this.submitted = false;
    this.form = this.portfolioFormService.getPortfolioForm(portfolio);
    this.addSearchSubscription();
  }

  addSearchSubscription(): void {
    const cointTitleControl = (this.form.controls.searchCoin as FormGroup).get(
      'title'
    );
    cointTitleControl?.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this.unsubscribe)
      )
      .subscribe(title => {
        if (!title || title.length <= 1) {
          return;
        }
        this.coins$ = this.coinService.searchCoinDetails(title);
      });
  }

  onCoinSelect(coin: any): void {
    this.form.get('searchCoin')?.patchValue(coin);
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

  coinSelected({ id }: any): void {
    this.router.navigate([`/coins/coin-details/${id}`]);
  }

  coinRemoved(i: number): void {
    const coinHoldings: FormArray =
      this.portfolioFormService.removeCoinHoldingGroup(this.form, i);

    this.form.setControl('coinHoldings', coinHoldings);
  }
}
