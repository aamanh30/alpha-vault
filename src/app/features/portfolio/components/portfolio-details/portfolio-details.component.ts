import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent {
  @Input() portfolio: any = null;
}
