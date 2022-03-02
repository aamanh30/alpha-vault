import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PortfolioNameSectionComponent } from './components/portfolio-name-section/portfolio-name-section.component';
import { CoinHoldingsSectionComponent } from './components/coin-holdings-section/coin-holdings-section.component';
import { SharedModule } from '../../shared/shared.module';
import { CreatePortfolioPageComponent } from './pages/create-portfolio-page/create-portfolio-page.component';
import { PortfolioDetailsPageComponent } from './pages/portfolio-details-page/portfolio-details-page.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { ChartsModule } from '../charts/charts.module';
import { CoinSearchFormComponent } from './components/coin-search-form/coin-search-form.component';
import { PortfolioDashboardPageComponent } from './pages/portfolio-dashboard-page/portfolio-dashboard-page.component';
import { ReportGenerationFormComponent } from './components/report-generation-form/report-generation-form.component';

@NgModule({
  declarations: [
    PortfolioNameSectionComponent,
    CoinHoldingsSectionComponent,
    CreatePortfolioPageComponent,
    PortfolioDetailsPageComponent,
    PortfolioDetailsComponent,
    CoinSearchFormComponent,
    PortfolioDashboardPageComponent,
    ReportGenerationFormComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialDesignModule,
    SharedModule,
    ChartsModule
  ]
})
export class PortfolioModule {}
