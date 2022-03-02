import { Component } from '@angular/core';

@Component({
  selector: 'alpha-vault-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {
  constructor() {}

  navigateBack(): void {
    history.back();
  }
}
