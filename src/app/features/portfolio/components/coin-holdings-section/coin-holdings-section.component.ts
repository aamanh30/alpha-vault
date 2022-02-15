import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'alpha-vault-coin-holdings-section',
  templateUrl: './coin-holdings-section.component.html',
  styleUrls: ['./coin-holdings-section.component.scss']
})
export class CoinHoldingsSectionComponent implements OnChanges {
  @Input() coinHoldings: AbstractControl = new FormArray([]);
  @Input() readonly: boolean = true;
  @Input() submitted: boolean = false;
  @Output() rowClickedEmitter = new EventEmitter();
  @Output() removeCoinEmitter = new EventEmitter();
  columns: string[] = [];
  constructor() {}

  ngOnChanges(): void {
    this.columns = this.getColumnNames();
  }

  getColumnNames(): string[] {
    const [columns] = this.coinHoldings.value.map((coinHolding: any) =>
      Object.keys(coinHolding).filter(key => key !== 'id')
    );

    return columns || [];
  }
}
