import { AnimationService } from './../../services/animation.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'alpha-vault-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = new Observable();
  unsubscribe: Subject<boolean> = new Subject();

  constructor(
    private animationService: AnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.animationService.getLoading();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.animationService.updateLoading(true);
        return;
      }
      setTimeout(() => this.animationService.updateLoading(false), 500);
    });
  }

  ngOnDestroy(): void {}
}
