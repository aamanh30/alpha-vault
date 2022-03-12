import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-portfolio-additional-details',
  templateUrl: './portfolio-additional-details.component.html',
  styleUrls: ['./portfolio-additional-details.component.scss']
})
export class PortfolioAdditionalDetailsComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitted: boolean = false;
  @Input() config: any = null;
}
