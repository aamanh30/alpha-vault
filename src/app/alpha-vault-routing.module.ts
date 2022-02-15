import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/guards/authenticated/authenticated.guard';
import { EmptyLayoutComponent } from './features/layout/pages/empty-layout/empty-layout.component';
import { FullPageLayoutComponent } from './features/layout/pages/full-page-layout/full-page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullPageLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'portfolio',
        canActivate: [AuthenticatedGuard],
        loadChildren: () =>
          import('./features/portfolio/portfolio.module').then(
            m => m.PortfolioModule
          )
      },
      {
        path: 'coins',
        loadChildren: () =>
          import('./features/coins/coins.module').then(m => m.CoinsModule)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./features/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./features/error/error.module').then(m => m.ErrorModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    component: EmptyLayoutComponent,
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        m => m.AuthenticationModule
      )
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AlphaVaultRoutingModule {}
