import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PageBase } from '../../../../core/base';
import { PaymentService } from '../../services/payment/payment.service';
import { AvxService } from '../../../portfolio/services/avx/avx.service';

@Component({
  selector: 'alpha-vault-payment-dashboard-page',
  templateUrl: './payment-dashboard-page.component.html',
  styleUrls: ['./payment-dashboard-page.component.scss']
})
export class PaymentDashboardPageComponent extends PageBase implements OnInit {
  walletBalance$: Observable<any> | null = null;
  avxTokenBalance$: Observable<any> | null = null;
  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private avxService: AvxService
  ) {
    super();
  }

  ngOnInit(): void {
    this.walletBalance$ = this.paymentService.getWalletBalance();
    this.avxTokenBalance$ = this.avxService.getAVXTokenBalance();
  }

  useFunds(): void {
    this.paymentService.updatePaymentDetails({});
    this.router.navigate(['/payment/buy-avx']);
  }
}
