import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { SharedModule } from './../../shared/shared.module';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { ConnectWalletComponent } from './components/connect-wallet/connect-wallet.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { AccountPreferencesPageComponent } from './pages/account-preferences-page/account-preferences-page.component';
import { AccountPreferencesFormComponent } from './components/account-preferences-form/account-preferences-form.component';

@NgModule({
  declarations: [
    SignUpPageComponent,
    SignInPageComponent,
    SignOutPageComponent,
    SignUpFormComponent,
    SignInFormComponent,
    AuthPageComponent,
    AuthHeaderComponent,
    ConnectWalletComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordFormComponent,
    AccountPreferencesPageComponent,
    AccountPreferencesFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialDesignModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule {}
