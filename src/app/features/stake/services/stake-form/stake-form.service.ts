import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StakeFormService {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  getAVXStakingForm(data = <any>{}): FormGroup {
    const balance = this.userService.getAVXBalanceValue();
    const form = this.fb.group({
      email: [data?.email || null],
      stakingAmount: [
        data?.amount || null,
        [Validators.required, Validators.min(1), Validators.max(balance)]
      ],
      lockPeriod: [
        data?.lockPeriod || null,
        [Validators.required, Validators.min(1)]
      ],
      startDate: [data?.startDate || null, [Validators.required]]
    });
    form.markAllAsTouched();

    return form;
  }
}
