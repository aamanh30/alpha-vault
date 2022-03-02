import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MaterialDesignModule } from './../material-design/material-design.module';
import { CoinsRoutingModule } from './coins-routing.module';
import { CoinDetailsPageComponent } from './pages/coin-details-page/coin-details-page.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  declarations: [CoinDetailsPageComponent, CoinDetailsComponent],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    MaterialDesignModule,
    SharedModule,
    ChartsModule
  ]
})
export class CoinsModule {}
