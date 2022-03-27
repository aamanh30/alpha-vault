import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'alpha-vault-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {
  @Output() navigateBack: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
}
