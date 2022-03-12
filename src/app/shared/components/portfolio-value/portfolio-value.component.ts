import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-portfolio-value',
  templateUrl: './portfolio-value.component.html',
  styleUrls: ['./portfolio-value.component.scss']
})
export class PortfolioValueComponent implements OnChanges {
  @Input() portfolioValue: number | string | null = null;
  @Input() isTrending: boolean | null = null;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  calculatePortfolio(): void {}
}
