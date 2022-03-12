import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-coin-search-form',
  templateUrl: './coin-search-form.component.html',
  styleUrls: ['./coin-search-form.component.scss']
})
export class CoinSearchFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitted: boolean = false;
  @Input() noMatchMessage: string = 'No matches found';
  @Input() coins: any[] = [];
  @Output() coinSelectedEmitter = new EventEmitter();
  constructor() {}

  resetSearch(): void {
    this.form?.controls?.searchCoin.reset();
    this.coins = [];
  }
}
