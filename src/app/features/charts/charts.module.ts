import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './components/chart/chart.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, SharedModule],
  exports: [ChartComponent]
})
export class ChartsModule {}
