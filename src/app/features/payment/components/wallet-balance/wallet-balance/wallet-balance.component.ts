import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss']
})
export class WalletBalanceComponent {
  @Input() walletInfo: any = null;
}
