import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-vault-payment-landing-page',
  templateUrl: './payment-landing-page.component.html',
  styleUrls: ['./payment-landing-page.component.scss']
})
export class PaymentLandingPageComponent {
  constructor(public router: Router) {}

  navigateBack(): void {
    history.back();
  }
}
