import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-portfolio-name-section',
  templateUrl: './portfolio-name-section.component.html',
  styleUrls: ['./portfolio-name-section.component.scss']
})
export class PortfolioNameSectionComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitted: boolean = false;
  @Input() content: string | null = '';
  @Input() isAdmin: boolean = false;
  constructor() {}
}
