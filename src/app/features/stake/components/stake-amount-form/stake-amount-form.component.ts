import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-stake-amount-form',
  templateUrl: './stake-amount-form.component.html',
  styleUrls: ['./stake-amount-form.component.scss']
})
export class StakeAmountFormComponent {
  @Input() minDate: Date = new Date();
  @Input() maxDate: Date | null = null;
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  @Input() heading: string | null = null;
  constructor() {}
}
