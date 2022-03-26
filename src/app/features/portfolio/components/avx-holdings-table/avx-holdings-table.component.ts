import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-avx-holdings-table',
  templateUrl: './avx-holdings-table.component.html',
  styleUrls: ['./avx-holdings-table.component.scss']
})
export class AvxHoldingsTableComponent {
  @Input() avxHoldingsDetails: any = null;
  constructor() {}
}
