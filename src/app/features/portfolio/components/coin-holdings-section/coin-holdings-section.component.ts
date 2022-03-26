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
  @Output() navigateCoinEmitter = new EventEmitter();
  @Output() coinPercentageChangeEmitter = new EventEmitter();
  columns: string[] = [];
  constructor() {}

  ngOnChanges(): void {
    this.columns = this.getColumnNames();
  }

  getColumnNames(): string[] {
    const keys = this.readonly
      ? ['oldPercentage', 'name', 'thumbnail']
      : ['percentage', 'oldPercentage', 'name', 'thumbnail'];
    const [columns] = this.coinHoldings.value.map((coinHolding: any) =>
      Object.keys(coinHolding).filter(key => keys.includes(key))
    );

    return columns || [];
  }

  getCoinHoldingsTotal(holdings: any[]): number | null {
    let total = 0;
    if (holdings && holdings.length) {
      total = holdings.reduce(
        (total: number, { percentage }: any) => (total += percentage),
        0
      );
    }

    return total;
  }

  onCoinPercentageChange(index: number, event: Event): void {
    this.coinPercentageChangeEmitter.emit({
      index,
      percentage: (<HTMLInputElement>event.target)?.valueAsNumber
    });
  }
}
