import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { PortfolioFormService } from './../../services/portfolio-form/portfolio-form.service';
import { PortfolioBase } from './../../base/portfolio.base';
import { CoinService } from './../../../coins/services/coin/coin.service';

@Component({
  selector: 'alpha-vault-create-portfolio-page',
  templateUrl: './create-portfolio-page.component.html',
  styleUrls: ['./create-portfolio-page.component.scss']
})
export class CreatePortfolioPageComponent
  extends PortfolioBase
  implements OnInit, OnDestroy
{
  submitted: boolean = false;
  unsubscribe = new Subject();
  form: FormGroup = new FormGroup({});
  coins$: any;
  constructor(
    protected router: Router,
    protected portfolioFormService: PortfolioFormService,
    protected coinService: CoinService
  ) {
    super(router, portfolioFormService, coinService);
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

    this.router.navigate(['/payment/connect']);
    if (this.form.invalid) {
      return;
    }

    console.log(`FORM SAVED: `, this.form.value);
    this.initForm();
  }

  investNow(): void {
    this.submitted = true;
    this.router.navigate(['/payment/connect']);
    if (this.form.invalid) {
      return;
    }

    console.log(`INVEST NOW: `, this.form.value);
    this.initForm();
  }
}
