import { ElementRef, Injectable } from '@angular/core';

import { ChartTypes } from '../../models';
declare const google: any;

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
    if (!(data && data.length)) {
      this.renderEmptyMessage(chartElement);
      return;
    }
    let renderFunction: Function;
    switch (type) {
      case ChartTypes.donut: {
        renderFunction = this.renderDonutChart(
          data,
          chartElement.nativeElement
        );
        break;
      }
      case ChartTypes.line: {
        renderFunction = this.renderLineChart(data, chartElement.nativeElement);
        break;
      }
      default:
        renderFunction = () => {};
    }

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(renderFunction);
  }

  renderEmptyMessage(element: ElementRef | null): void {
    if (!(element && element.nativeElement)) {
      return;
    }
    const htmlTag = document.createElement('strong');
    htmlTag.innerText = `No data found`;
    (element.nativeElement as HTMLElement).appendChild(htmlTag);
  }

  renderDonutChart(data: any, chart: any): Function {
    return () => {
      const chartData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ...data.map((data: any) => [data.label, data.value])
      ]);

      const options = {
        pieHole: 0.8,
        colors: ['#ff0084', '#843ea1', '#01e2dc']
      };

      const donutChart = new google.visualization.PieChart(chart);
      donutChart.draw(chartData, options);
    };
  }

  renderLineChart(data: any, chart: any): Function {
    return () => {
      const chartData = google.visualization.arrayToDataTable([
        ['Legend', 'Value'],
        ...data.map((data: any) => [data.label, data.value])
      ]);

      const options = {
        curveType: 'function',
        colors: ['#01e2dc'],
        legend: { position: 'none' }
      };

      const lineChart = new google.visualization.LineChart(chart);
      lineChart.draw(chartData, options);
    };
  }
}
