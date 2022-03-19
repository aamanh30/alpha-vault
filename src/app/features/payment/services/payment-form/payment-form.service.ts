import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {
  constructor(private fb: FormBuilder) {}

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

  getInvestmentForm(data = <any>{}): FormGroup {
    const form = this.fb.group({
      email: [data?.email || null],
      amount: [data?.amount || null, [Validators.required, Validators.min(0)]]
    });
    form.markAllAsTouched();

    return form;
  }
}
