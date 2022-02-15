import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-connect-payment-card',
  templateUrl: './connect-payment-card.component.html',
  styleUrls: ['./connect-payment-card.component.scss']
})
export class ConnectPaymentCardComponent {
  @Input() title: string = '';
  constructor() {}
}
