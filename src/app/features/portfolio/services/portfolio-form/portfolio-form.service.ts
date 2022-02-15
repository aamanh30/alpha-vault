import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';

import { totalValueValidator } from '../../configs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFormService {
  constructor(private fb: FormBuilder) {}

  getPortfolioForm(portfolio = <any>{}): FormGroup {
    const portfolioGroup = {
      id: [portfolio.id || null],
      title: [
        portfolio.title || null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
      ],
      type: [portfolio.type || null],
      content: [portfolio.content || null],
      isTrending: [portfolio.isTrending],
      percentage: [portfolio.percentage || null],
      searchCoin: this.getCoinHoldingForm(),
      annualFees: [portfolio.annualFees || null],
      topHoldings: [portfolio.topHoldings || null],
      marketSegment: [portfolio.marketSegment || null],
      coinHoldings: this.getCoinHoldingFormArray(portfolio.coinHoldings || [])
    };
    return this.fb.group(portfolioGroup);
  }

  getCoinHoldingFormArray(coinHoldings = []): FormArray {
    let coinHoldingsArray: any[] | FormArray = coinHoldings.map(
      (holding: any) => this.getCoinHoldingForm(holding)
    );
    coinHoldingsArray = this.fb.array(coinHoldingsArray);
    coinHoldingsArray.addValidators([Validators.required, totalValueValidator]);

    return coinHoldingsArray;
  }

  getCoinHoldingForm(holding = <any>{}): FormGroup {
    const coinGroup = this.fb.group({
      id: [holding.id || null, [Validators.required]],
      icon: [holding.icon || null],
      title: [
        holding.title || null,
        [Validators.required, Validators.minLength(3)]
      ],
      percentage: [holding.percentage || null, [Validators.required]]
    });

    return coinGroup;
  }

  addCoinHoldingGroup(form: FormGroup): FormArray {
    const { value: coinHoldingGroup } = form.get('searchCoin') as FormGroup;
    const { value: coinHoldingsArray } = form.get('coinHoldings') as FormArray;
    const index = coinHoldingsArray.findIndex(
      (holding: any) => holding.id === coinHoldingGroup.id
    );
    if (index >= 0) {
      coinHoldingsArray[index] = {
        ...coinHoldingsArray[index],
        percentage:
          Number(coinHoldingsArray[index].percentage) +
          Number(coinHoldingGroup.percentage)
      };
    } else {
      coinHoldingsArray.push(coinHoldingGroup);
    }

    return this.getCoinHoldingFormArray(coinHoldingsArray);
  }

  removeCoinHoldingGroup(form: FormGroup, index: number): FormArray {
    const coinHoldingsArray = form.get('coinHoldings') as FormArray;
    coinHoldingsArray.removeAt(index);
    return coinHoldingsArray;
  }

  getPortfolioReportForm(): FormGroup {
    const portfolioReportGroup = {
      from: [null, [Validators.required]],
      to: [null, [Validators.required]]
    };
    return this.fb.group(portfolioReportGroup);
  }
}
