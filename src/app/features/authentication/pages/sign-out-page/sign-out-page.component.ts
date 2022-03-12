import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageBase } from '../../../../core/base';
import { UserService } from '../../../../core/services/user/user.service';

@Component({
  selector: 'alpha-vault-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent extends PageBase implements OnDestroy {
  constructor(private userService: UserService, private router: Router) {
    super();
    this.clearDetails();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  clearDetails(): void {
    this.userService
      .signOut()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => this.router.navigate(['/home']));
  }
}
