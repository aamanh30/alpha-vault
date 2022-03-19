import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alpha-vault-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() heading: string = '';
  @Input() subHeading: boolean = false;
  @Input() content: string = '';
  @Output() headingClickEmitter = new EventEmitter();

  constructor() {}
}
