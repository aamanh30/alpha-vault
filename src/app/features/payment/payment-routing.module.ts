import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentConnectedGuard } from './guards/payment-connected/payment-connected.guard';
import { BuyAvoxTokensPageComponent } from './pages/buy-avox-tokens-page/buy-avox-tokens-page.component';
import { PaymentConnectPageComponent } from './pages/payment-connect-page/payment-connect-page.component';
import { PaymentDashboardPageComponent } from './pages/payment-dashboard-page/payment-dashboard-page.component';
import { PaymentLandingPageComponent } from './pages/payment-landing-page/payment-landing-page.component';
import { WalletTopUpPageComponent } from './pages/wallet-top-up-page/wallet-top-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentLandingPageComponent,
    children: [
      {
        path: 'connect',
        component: PaymentDashboardPageComponent
      },
      {
        path: 'wallet',
        component: PaymentConnectPageComponent
      },
      {
        path: 'card',
        component: PaymentConnectPageComponent
      },
      {
        path: 'top-up',
        canActivate: [PaymentConnectedGuard],
        canDeactivate: [PaymentConnectedGuard],
        component: WalletTopUpPageComponent
      },
      {
        path: 'buy-avx',
        component: BuyAvoxTokensPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'connect',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {}
