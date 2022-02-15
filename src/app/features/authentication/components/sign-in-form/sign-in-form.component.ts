import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { InputTypes } from './../../../../shared/configs/directives.config';

@Component({
  selector: 'alpha-vault-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  inputTypes = InputTypes;
  constructor() {}
}
