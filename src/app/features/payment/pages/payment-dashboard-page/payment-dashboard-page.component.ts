import { Component, OnInit } from '@angular/core';
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
  constructor(private paymentService: PaymentService) {
    super();
  }

  ngOnInit(): void {
    this.walletBalance$ = this.paymentService.getWalletBalance();
  }
}
