import { AccountPreferencesPageComponent } from './pages/account-preferences-page/account-preferences-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { AuthenticatedGuard } from '../../core/guards/authenticated/authenticated.guard';
import { UnAuthenticatedGuard } from '../../core/guards/un-authenticated/un-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'sign-in',
        canActivate: [UnAuthenticatedGuard],
        component: SignInPageComponent
      },
      {
        path: 'sign-up',
        canActivate: [UnAuthenticatedGuard],
        component: SignUpPageComponent
      },
      {
        path: 'sign-out',
        component: SignOutPageComponent
      },
      {
        path: 'forgot-password',
        canActivate: [UnAuthenticatedGuard],
        component: ForgotPasswordPageComponent
      },
      {
        path: 'account-preferences',
        canActivate: [AuthenticatedGuard],
        component: AccountPreferencesPageComponent
      },
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
