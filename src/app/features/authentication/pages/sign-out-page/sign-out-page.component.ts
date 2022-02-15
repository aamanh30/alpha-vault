import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'alpha-vault-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnDestroy {
  unsubscribe = new Subject();
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.clearDetails();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  clearDetails(): void {
    this.authenticationService
      .signOut()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => this.router.navigate(['/sign-in']));
  }
}
