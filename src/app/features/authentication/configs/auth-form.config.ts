import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';

export const forgotPasswordFormConfig = {
  emailAddress: [
    '',
    [Validators.required, Validators.email, Validators.pattern(/.*@.*\..*/)]
  ]
};

export const accountDetailsFormConfig = {
  cardHolderName: ['', [Validators.required, Validators.minLength(3)]],
  cardNumber: [
    '',
    [Validators.required, Validators.pattern(/.*[4]-.*[4]-.*[4]-.*[4]/)]
  ],
  expiryDate: [
    '',
    [Validators.required, Validators.pattern(/.*[2]\/.*[2]\/.*[4]/)]
  ],
  cvvNumber: ['', [Validators.required, Validators.minLength(3)]],
  saveCardInfo: [false]
};

export const signInConfig = {
  title: `Login`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null
};

export const connectWalletConfig = {
  title: `Connect Your Wallet`,
  type: null,
  percentage: null,
  isTrending: null,
  content: `Please choose from one of the wallets to transfer your Cryptos to our platform.`
};

export const signUpConfig = {
  title: `Register`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null
};

export const forgotPasswordConfig = {
  title: `Forgot Password`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null
};

export const passwordMatcher =
  (controlName: string, matchingControlName: string): ValidatorFn =>
  (group: AbstractControl): { [key: string]: boolean } | null => {
    const control = (group as FormGroup).controls[controlName];
    const matchingControl = (group as FormGroup).controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.custom) {
      return matchingControl.errors;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        custom: `${
          controlName.charAt(0).toUpperCase() + controlName.substring(1)
        } and ${
          matchingControlName.charAt(0).toUpperCase() +
          matchingControlName.substring(1)
        } do not match`
      });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
