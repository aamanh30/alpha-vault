import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../../core/base';
import { PaymentFormService } from '../../services/payment-form/payment-form.service';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'alpha-vault-payment-connect-page',
  templateUrl: './payment-connect-page.component.html',
  styleUrls: ['./payment-connect-page.component.scss']
})
export class PaymentConnectPageComponent extends PageBase implements OnInit {
  form: FormGroup = new FormGroup({});
  wallets$: Observable<any> | null = null;
  isWallet: boolean = true;

  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private paymentFormService: PaymentFormService
  ) {
    super();
    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.isWallet = event.url.match(/wallet/gi) ? true : false;
      this.form = this.isWallet
        ? this.paymentFormService.getWalletForm()
        : this.paymentFormService.getCardForm();
    });
  }
  ngOnInit(): void {
    this.wallets$ = this.paymentService.getWallets();
  }

  ngOnDestroy(): void {}

  onWalletSelect({ value }: any = {}): void {
    const selectedWallet =
      this.form?.value?.selectedWallet !== value ? value : null;
    this.form.patchValue({
      selectedWallet
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.paymentService.updatePaymentDetails(this.form.value);
    this.router.navigate(['/payment/top-up']);
  }

  onBack(): void {
    this.submitted = false;
  }
  onExpDateSelected(expDate: any = null) {
    console.log(expDate);
    this.form.patchValue({
      expDate
    });
  }
}
