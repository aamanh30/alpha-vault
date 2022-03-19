import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { PageBase } from '../../../../core/base';
import { AnimationService } from '../../../../shared/services/animation/animation.service';
import { PaymentFormService } from '../../services/payment-form/payment-form.service';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'alpha-vault-top-up-page',
  templateUrl: './top-up-page.component.html',
  styleUrls: ['./top-up-page.component.scss']
})
export class TopUpPageComponent extends PageBase implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private paymentFormService: PaymentFormService,
    private animationService: AnimationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.paymentFormService.getInvestmentForm();
  }

  onTopUp(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.paymentService
      .topUpWallet(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        res => {
          this.submitting = false;
          this.animationService.open(
            `Wallet has been credited with $${this.form?.value?.amount}`
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
