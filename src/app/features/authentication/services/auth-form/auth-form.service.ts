import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  constructor(private fb: FormBuilder) {}

  getSignInForm(): FormGroup {
    return this.fb.group({});
  }

  getSignUpForm(): FormGroup {
    return this.fb.group({});
  }

  getForgotPasswordForm(): FormGroup {
    return this.fb.group({});
  }

  getAccountPreferencesForm(): FormGroup {
    const accountPreferences = {
      investmentStyles: [null],
      investmentGoals: [null],
      cryptoExperience: [null],
      age: [null],
      tradingExperience: [null]
    };

    return this.fb.group(accountPreferences);
  }
}
