import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../../core/base';
import { StakeFormService } from '../../services/stake-form/stake-form.service';
import { StakeService } from '../../services/stake/stake.service';
import { AnimationService } from '../../../../shared/services/animation/animation.service';

@Component({
  selector: 'alpha-vault-stake-amount-page',
  templateUrl: './stake-amount-page.component.html',
  styleUrls: ['./stake-amount-page.component.scss']
})
export class StakeAmountPageComponent extends PageBase implements OnInit {
  form: FormGroup = new FormGroup({});
  stakeAmount$: Observable<any> | null = null;
  constructor(
    private router: Router,
    private stakeService: StakeService,
    private stakeFormService: StakeFormService,
    private animationService: AnimationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.stakeFormService.getAVXStakingForm();
    this.stakeAmount$ = this.stakeService.getStakeAmount();
  }

  stakeAmount(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.stakeService
      .stakeAmount(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        res => {
          this.submitting = false;
          this.animationService.open(
            `$${this.form?.value?.stakingAmount} staked to your account`
          );
          setTimeout(
            () => this.router.navigate(['/stake/stake-dashboard']),
            2000
          );
        },
        ({ error }) => {
          this.submitting = false;
          this.animationService.open(error?.message, 'error');
        }
      );
  }
}
