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
import { PortfolioAdditionalDetailsComponent } from './components/portfolio-additional-details/portfolio-additional-details.component';
import { PortfolioInvestmentFormComponent } from './components/portfolio-investment-form/portfolio-investment-form.component';
import { EditPortfolioPageComponent } from './pages/edit-portfolio-page/edit-portfolio-page.component';
import { TradingAlgorithmSectionComponent } from './components/trading-algorithm-section/trading-algorithm-section.component';

@NgModule({
  declarations: [
    PortfolioNameSectionComponent,
    CoinHoldingsSectionComponent,
    CreatePortfolioPageComponent,
    PortfolioDetailsPageComponent,
    PortfolioDetailsComponent,
    CoinSearchFormComponent,
    PortfolioDashboardPageComponent,
    ReportGenerationFormComponent,
    PortfolioAdditionalDetailsComponent,
    PortfolioInvestmentFormComponent,
    EditPortfolioPageComponent,
    TradingAlgorithmSectionComponent
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
