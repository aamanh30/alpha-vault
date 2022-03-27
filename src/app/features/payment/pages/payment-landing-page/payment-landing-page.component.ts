import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageBase } from '../../../../core/base';

@Component({
  selector: 'alpha-vault-payment-landing-page',
  templateUrl: './payment-landing-page.component.html',
  styleUrls: ['./payment-landing-page.component.scss']
})
export class PaymentLandingPageComponent extends PageBase {
  constructor(public router: Router) {
    super();
  }
}
