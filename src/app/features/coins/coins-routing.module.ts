import { CoinDetailsPageComponent } from './pages/coin-details-page/coin-details-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coin-details',
    children: [
      {
        path: ':id',
        component: CoinDetailsPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsRoutingModule {}
