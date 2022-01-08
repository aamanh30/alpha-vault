import { Validators } from '@angular/forms';

export const signUpFormConfig = {
  fullName: ['', [Validators.minLength(3)]],
  emailAddress: [
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
};

export const signInFormConfig = {
  emailAddress: [
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
};

export const accountDetailsFormConfig = {};
