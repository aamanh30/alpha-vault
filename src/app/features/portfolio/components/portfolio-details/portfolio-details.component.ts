import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() portfolio: any = null;
  constructor() {}

  ngOnInit(): void {}
}
