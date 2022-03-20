import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-trading-algorithm-section',
  templateUrl: './trading-algorithm-section.component.html',
  styleUrls: ['./trading-algorithm-section.component.scss']
})
export class TradingAlgorithmSectionComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() algorithmInfo: any = null;
  @Output() investmentConfirmEmitter: EventEmitter<any> = new EventEmitter();
  @Output() investmentCancelEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
