import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './features/shared/components/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./features/portfolio/portfolio.module').then(
            m => m.PortfolioModule
          )
      },
      {
        path: 'market',
        loadChildren: () =>
          import('./features/market/market.module').then(m => m.MarketModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.module').then(
            m => m.SettingsModule
          )
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./features/error/error.module').then(m => m.ErrorModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/authentication/authentication.module').then(
            m => m.AuthenticationModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
