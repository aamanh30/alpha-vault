import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentConnectedGuard } from './guards/payment-connected/payment-connected.guard';

import { PaymentConnectPageComponent } from './pages/payment-connect-page/payment-connect-page.component';
import { PaymentDashboardPageComponent } from './pages/payment-dashboard-page/payment-dashboard-page.component';
import { PaymentLandingPageComponent } from './pages/payment-landing-page/payment-landing-page.component';
import { TopUpPageComponent } from './pages/top-up-page/top-up-page.component';

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
        component: TopUpPageComponent
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
