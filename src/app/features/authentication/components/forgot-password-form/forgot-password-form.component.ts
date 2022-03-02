import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  constructor() {}
}
