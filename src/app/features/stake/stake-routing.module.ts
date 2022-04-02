import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeAmountPageComponent } from './pages/stake-amount-page/stake-amount-page.component';
import { StakeDashboardPageComponent } from './pages/stake-dashboard-page/stake-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stake-dashboard',
        component: StakeDashboardPageComponent
      },
      {
        path: 'stake-amount',
        component: StakeAmountPageComponent
      },

      {
        path: '',
        redirectTo: 'stake-dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakeRoutingModule {}
