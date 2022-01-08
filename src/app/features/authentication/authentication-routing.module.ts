import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'sign-out',
    component: SignOutPageComponent
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
