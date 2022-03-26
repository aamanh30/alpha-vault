import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from './core/base';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'alpha-vault-root',
  templateUrl: './alpha-vault.component.html',
  styleUrls: ['./alpha-vault.component.scss']
})
export class AlphaVaultComponent extends PageBase implements OnInit, OnDestroy {
  constructor(private userService: UserService, private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.userService.checkUser();
    this.addRouterSubscription();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  addRouterSubscription(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
