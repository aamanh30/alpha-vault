import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Injectable } from '@angular/core';

import { totalValueValidator } from '../../configs';
import { UserService } from '../../../../core/services/user/user.service';
import { tradingAlgorithmTypes } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFormService {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  getPortfolioForm(portfolio = <any>{}): FormGroup {
    const portfolioGroup = this.fb.group({
      id: [portfolio?.id || null],
      name: [
        portfolio?.name || null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      description: [portfolio?.description || null],
      type: [portfolio?.type || null],
      content: [portfolio?.content || null],
      isTrending: [portfolio?.isTrending],
      percentage: [portfolio?.percentage || null],
      searchCoin: this.getCoinHoldingForm(),
      annualFees: [portfolio?.annualFees || null],
      topHoldings: [portfolio?.topHoldings || null],
      marketSegment: [portfolio?.marketSegment || null],
      strategyType: [portfolio?.strategyType || null, [Validators.required]],
      rebalancing: [portfolio?.rebalancing || null, [Validators.required]],
      holdTerm: [portfolio?.holdTerm || null, [Validators.required]],
      buyType: [portfolio?.buyType || null, [Validators.required]],
      coinHoldings: this.getCoinHoldingFormArray(portfolio.coinHoldings || []),
      color: [portfolio?.color || '#000000'],
      shortDesc: [portfolio?.shortDesc || null],
      isEditable: [portfolio?.isEditable || false],
      tradingAlgorithm: [
        portfolio?.tradingAlgorithm || tradingAlgorithmTypes.medium
      ]
    });
    portfolioGroup.markAllAsTouched();

    return portfolioGroup;
  }

  getCoinHoldingFormArray(coinHoldings = []): FormArray {
    let coinHoldingsArray: any[] | FormArray = coinHoldings
      .sort((coinHoldingA: any, coinHoldingB: any) =>
        coinHoldingA?.percentage < coinHoldingB?.percentage ? 1 : -1
      )
      .map((holding: any) => this.getCoinHoldingForm(holding));
    coinHoldingsArray = this.fb.array(coinHoldingsArray, [
      Validators.required,
      totalValueValidator()
    ]);

    return coinHoldingsArray;
  }

  getCoinHoldingForm(holding = <any>{}): FormGroup {
    const coinGroup = this.fb.group({
      id: [holding?.id],
      protfolioId: [null],
      thumbnail: [holding?.thumbnail || null],
      coinId: [holding?.coinId || null],
      name: [holding?.name || null],
      percentage: [holding.percentage || null],
      oldPercentage: [holding.percentage || null],
      createdPrice: [holding?.createdPrice || null],
      currentPrice: [holding?.currentPrice || null]
    });

    return coinGroup;
  }

  addCoinHoldingGroup(form: FormGroup): FormArray {
    const { value: coinHoldingGroup } = form.get('searchCoin') as FormGroup;
    const { value: coinHoldingsArray } = form.get('coinHoldings') as FormArray;
    const index = coinHoldingsArray.findIndex(
      (holding: any) => holding.coinId === coinHoldingGroup.coinId
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

  getPortfolioInvestmentForm(investment: any = {}): FormGroup {
    const balance = this.userService.getWalletBalanceValue();
    const portfolioInvestmentGroup = this.fb.group({
      id: [investment?.id || null],
      protfolioId: [investment?.protfolioId || null],
      userEmail: [investment?.userEmail || null],
      createdon: [investment?.createdon || new Date().toISOString()],
      investmentAmount: [
        investment?.investmentAmount || null,
        [Validators.required, Validators.min(1), Validators.max(balance)]
      ]
    });
    portfolioInvestmentGroup.markAllAsTouched();

    return portfolioInvestmentGroup;
  }

  updateCoinHoldingsGroup(
    form: FormGroup,
    {
      index,
      percentage
    }: {
      index: number;
      percentage: number;
    }
  ) {
    const group = (form.get('coinHoldings') as FormArray)?.at(index);
    const { oldPercentage } = group.value;
    group.patchValue({ percentage, oldPercentage });
  }
}
