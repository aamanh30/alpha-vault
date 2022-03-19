import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-connect-wallet-form',
  templateUrl: './connect-wallet-form.component.html',
  styleUrls: ['./connect-wallet-form.component.scss']
})
export class ConnectWalletFormComponent {
  @Input() form = new FormGroup({});
  @Input() submitted = false;
  @Input() wallets: any[] = [];
  @Output() selectWalletEmitter = new EventEmitter();
  constructor() {}

  resetSearch(): void {
    this.form?.controls?.searchTerm?.reset();
  }
}
