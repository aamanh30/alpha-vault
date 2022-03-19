import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ConnectPaymentCardComponent } from './components/connect-payment-card/connect-payment-card.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PaymentLandingPageComponent } from './pages/payment-landing-page/payment-landing-page.component';
import { ConnectWalletFormComponent } from './components/connect-wallet-form/connect-wallet-form.component';
import { ConnectCardFormComponent } from './components/connect-card-form/connect-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterWalletPipe } from './pipes/filter-wallet/filter-wallet.pipe';
import { WalletBalanceComponent } from './components/wallet-balance/wallet-balance/wallet-balance.component';
import { TopUpFormComponent } from './components/top-up-form/top-up-form/top-up-form.component';
import { PaymentConnectPageComponent } from './pages/payment-connect-page/payment-connect-page.component';
import { TopUpPageComponent } from './pages/top-up-page/top-up-page.component';
import { PaymentDashboardPageComponent } from './pages/payment-dashboard-page/payment-dashboard-page.component';

@NgModule({
  declarations: [
    ConnectPaymentCardComponent,
    PaymentConnectPageComponent,
    PaymentLandingPageComponent,
    ConnectWalletFormComponent,
    ConnectCardFormComponent,
    FilterWalletPipe,
    WalletBalanceComponent,
    TopUpFormComponent,
    TopUpPageComponent,
    PaymentDashboardPageComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialDesignModule
  ]
})
export class PaymentModule {}
