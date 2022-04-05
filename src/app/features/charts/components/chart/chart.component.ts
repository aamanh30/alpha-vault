import {
  OnChanges,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  SimpleChanges
} from '@angular/core';
import { ChartTypes } from '../../models';
import { ChartService } from '../../services/chart/chart.service';

@Component({
  selector: 'alpha-vault-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, AfterViewInit {
  @Input() type: ChartTypes = ChartTypes.line;
  @Input() data: any[] = [];
  loading: boolean = true;
  isDataEmpty: boolean = false;

  @ViewChild('chart') chartElement: ElementRef = <ElementRef>{};
  constructor(private chartService: ChartService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    if (!(changes && changes.data && changes.data.firstChange)) {
      return;
    }
    this.initChart();
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    setTimeout(() => (this.loading = false), 1000);
    this.isDataEmpty = this.data.every(({ value }: any) => !value);
    if (this.isDataEmpty) {
      this.chartService.renderEmptyMessage(this.chartElement);
      return;
    }
    this.chartService.initChart(this.type, this.data, this.chartElement);
  }
}
