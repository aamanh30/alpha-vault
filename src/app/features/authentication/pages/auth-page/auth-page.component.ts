import { Component } from '@angular/core';

import { PageBase } from '../../../../core/base';

@Component({
  selector: 'alpha-vault-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent extends PageBase {
  constructor() {
    super();
  }
}
