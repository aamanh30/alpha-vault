import { ElementRef, Injectable } from '@angular/core';

import { ChartTypes } from '../../models';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor() {}

  initChart(
    type: ChartTypes,
    data: any[],
    chartElement: ElementRef | null
  ): void {
    if (!chartElement || !chartElement.nativeElement) {
      return;
    }
    const canvas = d3.select(chartElement.nativeElement);
    switch (type) {
      case ChartTypes.area: {
        this.renderAreaChart(data, canvas);
        break;
      }
      case ChartTypes.bar: {
        this.renderBarChart(data, canvas);
        break;
      }
      case ChartTypes.donut: {
        this.renderDonutChart(data, canvas);
        break;
      }
      case ChartTypes.line: {
        this.renderLineChart(data, canvas);
        break;
      }
      case ChartTypes.pie: {
        this.renderPieChart(data, canvas);
        break;
      }
    }
  }

  renderAreaChart(data: any, canvas: any): void {}

  renderBarChart(data: any, canvas: any): void {}

  renderDonutChart(data: any, canvas: any): void {
    canvas.attr('height', '200px').classed('w-100 canvas item');
  }

  renderLineChart(data: any, canvas: any): void {}

  renderPieChart(data: any, canvas: any): void {}
}
