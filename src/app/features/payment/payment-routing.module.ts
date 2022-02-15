import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectWalletPageComponent } from './pages/connect-wallet-page/connect-wallet-page.component';

const routes: Routes = [
  {
    path: 'connect',
    component: ConnectWalletPageComponent
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
