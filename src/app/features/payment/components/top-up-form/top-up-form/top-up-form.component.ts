import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-top-up-form',
  templateUrl: './top-up-form.component.html',
  styleUrls: ['./top-up-form.component.scss']
})
export class TopUpFormComponent {
  @Input() submitted: boolean = false;
  @Input() form: FormGroup = new FormGroup({});
  @Input() selectedWallet: string | null = null;
  constructor() {}
}
