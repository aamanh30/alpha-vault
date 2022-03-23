import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PageBase } from '../../../../core/base';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'alpha-vault-payment-dashboard-page',
  templateUrl: './payment-dashboard-page.component.html',
  styleUrls: ['./payment-dashboard-page.component.scss']
})
export class PaymentDashboardPageComponent extends PageBase implements OnInit {
  walletBalance$: Observable<any> | null = null;
  constructor(private paymentService: PaymentService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.walletBalance$ = this.paymentService.getWalletBalance();
  }

  useFunds(): void {
    this.paymentService.updatePaymentDetails({});
    this.router.navigate(['/payment/buy-avx']);
  }
}
