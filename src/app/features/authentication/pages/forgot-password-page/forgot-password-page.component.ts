import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {
  forgotPasswordConfig,
  forgotPasswordFormConfig
} from './../../configs/auth-form.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'alpha-vault-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});
  unsubscribe: Subject<any> = new Subject<any>();
  forgotPasswordDetails: any = forgotPasswordConfig;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(forgotPasswordFormConfig);
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
      .forgotPassword(this.form.value)
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
