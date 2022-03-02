import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'alpha-vault-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnChanges {
  @Input() label: string = '';
  @Input() control: AbstractControl | null | undefined = null;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Changes: `, changes);
    console.log(`Control: `, this.control);
  }
}
