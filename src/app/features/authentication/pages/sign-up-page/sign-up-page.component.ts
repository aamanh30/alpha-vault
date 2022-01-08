import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { signUpFormConfig } from './../../configs/auth-form.config';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'alpha-vault-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(signUpFormConfig);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(`Value: `, this.form.value);
  }
}
