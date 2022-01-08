import { signInFormConfig } from './../../configs/auth-form.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-vault-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(signInFormConfig);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(`Value: `, this.form.value);
  }
}
