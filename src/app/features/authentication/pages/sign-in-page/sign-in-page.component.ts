import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {
  signInFormConfig,
  signInConfig,
  connectWalletConfig
} from './../../configs/auth-form.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'alpha-vault-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});
  unsubscribe: Subject<any> = new Subject<any>();
  signInDetails: any = signInConfig;
  connectWalletDetails: any = connectWalletConfig;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(signInFormConfig);
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

    this.authenticationService
      .signIn(this.form.value)
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
