import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { passwordMatcher } from '../../configs';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  constructor(private fb: FormBuilder) {}

  getSignInForm(): FormGroup {
    const group = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern(/.*@.*\..*/)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/.*[a-zA-Z0-9]/)
        ]
      ]
    });

    group.markAllAsTouched();

    return group;
  }

  getSignUpForm(): FormGroup {
    const group = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern(/.*@.*\..*/)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/.*[a-zA-Z0-9]/)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/.*[a-zA-Z0-9]/)
        ]
      ],
      isactive: [true]
    });

    group.setValidators([passwordMatcher('password', 'confirmPassword')]);

    group.markAllAsTouched();

    return group;
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
