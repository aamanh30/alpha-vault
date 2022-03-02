import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePortfolioPageComponent } from './pages/create-portfolio-page/create-portfolio-page.component';
import { PortfolioDashboardPageComponent } from './pages/portfolio-dashboard-page/portfolio-dashboard-page.component';
import { PortfolioDetailsPageComponent } from './pages/portfolio-details-page/portfolio-details-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PortfolioDashboardPageComponent
  },
  {
    path: 'create',
    component: CreatePortfolioPageComponent
  },
  {
    path: 'details',
    children: [
      {
        path: ':id',
        component: PortfolioDetailsPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
