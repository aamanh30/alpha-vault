import { InvestmentStyles, InvestmentGoals } from './../../models';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-account-preferences-form',
  templateUrl: './account-preferences-form.component.html',
  styleUrls: ['./account-preferences-form.component.scss']
})
export class AccountPreferencesFormComponent {
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  investmentStyles = InvestmentStyles;
  investmentGoals = InvestmentGoals;
  constructor() {}
}
