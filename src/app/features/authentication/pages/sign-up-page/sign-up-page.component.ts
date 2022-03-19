import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { signUpConfig } from './../../configs/auth-form.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthFormService } from '../../services/auth-form/auth-form.service';
import { PageBase } from '../../../../core/base';
import { UserService } from '../../../../core/services/user/user.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent extends PageBase implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  signUpDetails: any = signUpConfig;
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
    this.form = this.authFormService.getSignUpForm();
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
      .signUp(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: any) => {
          this.submitting = false;
          this.userService.updateUser(res);
          this.animationService.open(res.message);
          this.router.navigate(['/auth/account-preferences']);
        },
        ({ error }) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
