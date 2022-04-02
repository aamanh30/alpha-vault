import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakeRoutingModule } from './stake-routing.module';
import { StakeDashboardPageComponent } from './pages/stake-dashboard-page/stake-dashboard-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { StakeAmountPageComponent } from './pages/stake-amount-page/stake-amount-page.component';
import { StakeAmountFormComponent } from './components/stake-amount-form/stake-amount-form.component';

@NgModule({
  declarations: [StakeDashboardPageComponent, StakeAmountPageComponent, StakeAmountFormComponent],
  imports: [
    CommonModule,
    StakeRoutingModule,
    SharedModule,
    MaterialDesignModule
  ]
})
export class StakeModule {}
