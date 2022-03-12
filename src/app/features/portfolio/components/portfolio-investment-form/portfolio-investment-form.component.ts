import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-portfolio-investment-form',
  templateUrl: './portfolio-investment-form.component.html',
  styleUrls: ['./portfolio-investment-form.component.scss']
})
export class PortfolioInvestmentFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitted: boolean = false;
  constructor() {}
}
