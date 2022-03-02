import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ConnectWalletPageComponent } from './pages/connect-wallet-page/connect-wallet-page.component';
import { ConnectPaymentCardComponent } from './components/connect-payment-card/connect-payment-card.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [ConnectWalletPageComponent, ConnectPaymentCardComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    MaterialDesignModule
  ]
})
export class PaymentModule {}
