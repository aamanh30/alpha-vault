import { Component, Input } from '@angular/core';

@Component({
  selector: 'alpha-vault-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input() src: string = 'assets/videos/how-it-works.mp4';
  @Input() controls = true;
  constructor() { }
}
