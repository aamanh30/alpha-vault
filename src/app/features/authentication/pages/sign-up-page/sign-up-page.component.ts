import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {
  signUpFormConfig,
  signUpConfig
} from './../../configs/auth-form.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'alpha-vault-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});
  unsubscribe: Subject<any> = new Subject<any>();
  signUpDetails: any = signUpConfig;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(signUpFormConfig);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(): void {
    this.submitted = true;
    this.router.navigate(['/auth/account-preferences']);
    if (this.form.invalid) {
      return;
    }

    this.authenticationService
      .signUp(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        res => {
          console.log(`Value: `, this.form.value);
          this.router.navigate(['/home']);
        },
        err => {}
      );
  }
}
