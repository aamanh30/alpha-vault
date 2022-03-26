import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { ChartTypes } from '../../models';
import { ChartService } from '../../services/chart/chart.service';

@Component({
  selector: 'alpha-vault-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @Input() type: ChartTypes = ChartTypes.line;
  @Input() data = [];

  @ViewChild('chart') chartElement: ElementRef = <ElementRef>{};
  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.initChart(this.type, this.data, this.chartElement);
  }
}
