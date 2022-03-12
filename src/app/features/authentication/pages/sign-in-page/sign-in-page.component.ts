import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {
  signInConfig,
  connectWalletConfig
} from './../../configs/auth-form.config';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthFormService } from '../../services/auth-form/auth-form.service';
import { PageBase } from '../../../../core/base';
import { UserService } from '../../../../core/services/user/user.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent extends PageBase implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  signInDetails: any = signInConfig;
  connectWalletDetails: any = connectWalletConfig;
  constructor(
    private router: Router,
    private authFormService: AuthFormService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private animationService: AnimationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.authFormService.getSignInForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.authenticationService
      .signIn(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ user, message }: any) => {
          this.submitting = false;
          this.userService.updateUser(user);
          this.animationService.open(message);
          const url =
            this.router['browserUrlTree']?.queryParams?.url || '/home/main';
          this.router.navigate([url]);
        },
        ({ error }) => {
          this.submitting = false;
          this.animationService.open(error.message, 'error');
        }
      );
  }
}
