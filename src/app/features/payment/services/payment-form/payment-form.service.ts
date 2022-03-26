import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  getWalletForm(): FormGroup {
    const form = this.fb.group({
      searchTerm: [null],
      selectedWallet: [null, [Validators.required]]
    });
    form.markAllAsTouched();

    return form;
  }

  getCardForm(card = <any>{}): FormGroup {
    const form = this.fb.group({
      name: [
        card?.name || null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      cardNumber: [
        card?.cardNumber || null,
        [Validators.required, Validators.pattern(/[0-9]{16,16}/)]
      ],
      expDate: [card?.expDate || null, [Validators.required]],
      cvv: [
        card?.cvv || null,
        [Validators.required, Validators.pattern(/[0-9]{3}/)]
      ],
      saveCardDetails: [card?.saveCardDetails || false]
    });
    form.markAllAsTouched();

    return form;
  }

  getTopUpForm(data = <any>{}): FormGroup {
    const form = this.fb.group({
      email: [data?.email || null],
      amount: [
        data?.amount || null,
        [Validators.required, Validators.min(1), Validators.max(999999)]
      ]
    });
    form.markAllAsTouched();

    return form;
  }

  getAVXTopUpForm(data = <any>{}): FormGroup {
    const balance = this.userService.getWalletBalanceValue();
    const form = this.fb.group({
      email: [data?.email || null],
      amount: [
        data?.amount || null,
        [Validators.required, Validators.min(1), Validators.max(balance)]
      ]
    });
    form.markAllAsTouched();

    return form;
  }
}
