import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

@NgModule({
  declarations: [LineChartComponent, AreaChartComponent, DonutChartComponent],
  imports: [CommonModule],
  exports: [LineChartComponent, AreaChartComponent, DonutChartComponent]
})
export class ChartsModule {}
