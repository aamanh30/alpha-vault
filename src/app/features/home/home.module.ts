import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PortfolioCarouselComponent } from './components/portfolio-carousel/portfolio-carousel.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoryFiltersComponent } from './components/category-filters/category-filters.component';
import { PortfolioFilterPipe } from './pipes/portfolio-filter/portfolio-filter.pipe';

@NgModule({
  declarations: [HomePageComponent, PortfolioCarouselComponent, MainPageComponent, CategoryFiltersComponent, PortfolioFilterPipe],
  imports: [CommonModule, HomeRoutingModule, MaterialDesignModule, SharedModule]
})
export class HomeModule {}
