import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { PageBase } from '../../../../core/base';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { PaymentFormService } from '../../services/payment-form/payment-form.service';
import { PaymentService } from '../../services/payment/payment.service';
import { AvxService } from '../../../portfolio/services/avx/avx.service';

@Component({
  selector: 'alpha-vault-buy-avox-tokens-page',
  templateUrl: './buy-avox-tokens-page.component.html',
  styleUrls: ['./buy-avox-tokens-page.component.scss']
})
export class BuyAvoxTokensPageComponent extends PageBase implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private paymentFormService: PaymentFormService,
    private animationService: AnimationService,
    private avxService: AvxService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.paymentFormService.getTopUpForm();
  }

  onBuyAVX(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.avxService
      .buyAVX(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        res => {
          this.submitting = false;
          this.animationService.open(
            `AVX Tokens worth $${this.form?.value?.amount} credited to your account`
          );
          setTimeout(() => this.router.navigate(['/payment/connect']), 2000);
        },
        ({ error }) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
