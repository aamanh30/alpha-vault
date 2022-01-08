import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SocialSignInComponent } from './components/social-sign-in/social-sign-in.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    SignUpFormComponent,
    SignInFormComponent,
    SignOutPageComponent,
    SocialSignInComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatGridListModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthenticationModule {}
