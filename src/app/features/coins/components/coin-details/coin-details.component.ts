import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent {
  @Input() coin: any = null;
  constructor() {}
}
