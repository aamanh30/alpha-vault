import { InputTypes } from './../../../../shared/configs/directives.config';
import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  inputTypes = InputTypes;
  constructor() {}
}
