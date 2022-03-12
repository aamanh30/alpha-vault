import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../features/material-design/material-design.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PortfolioValueComponent } from './components/portfolio-value/portfolio-value.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { ToggleInputDirective, LoadingLayerDirective } from './directives';
import { ContentExcerptPipe } from './pipes';

@NgModule({
  imports: [CommonModule, MaterialDesignModule, RouterModule],
  declarations: [
    SpinnerComponent,
    VideoPlayerComponent,
    CardDetailsComponent,
    PortfolioValueComponent,
    ToggleInputDirective,
    ErrorMessagesComponent,
    LoadingLayerDirective,
    ContentExcerptPipe
  ],
  exports: [
    SpinnerComponent,
    VideoPlayerComponent,
    CardDetailsComponent,
    PortfolioValueComponent,
    ToggleInputDirective,
    ErrorMessagesComponent,
    LoadingLayerDirective,
    ContentExcerptPipe
  ]
})
export class SharedModule {}
