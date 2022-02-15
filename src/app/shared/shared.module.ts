import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../features/material-design/material-design.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PortfolioValueComponent } from './components/portfolio-value/portfolio-value.component';
import { ToggleInputDirective } from './directives/toggle-input/toggle-input.directive';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';

@NgModule({
  imports: [CommonModule, MaterialDesignModule, RouterModule],
  declarations: [
    SpinnerComponent,
    VideoPlayerComponent,
    CardDetailsComponent,
    PortfolioValueComponent,
    ToggleInputDirective,
    ErrorMessagesComponent
  ],
  exports: [
    SpinnerComponent,
    VideoPlayerComponent,
    CardDetailsComponent,
    PortfolioValueComponent,
    ToggleInputDirective,
    ErrorMessagesComponent
  ]
})
export class SharedModule {}
