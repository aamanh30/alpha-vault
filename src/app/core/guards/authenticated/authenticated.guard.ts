import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PaymentService } from '../../../features/payment/services/payment/payment.service';
import { UserService } from './../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private paymentService: PaymentService
  ) {}
  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.getUser().pipe(
      map((user: any) => {
        if (!user) {
          this.router.navigate(['/auth/sign-in'], {
            queryParams: {
              url: state.url
            }
          });
        }
        return user;
      }),
      mergeMap((user: any) => {
        if (!user) {
          return of(false);
        }

        return this.paymentService.getUserWallet(user.email);
      }),
      catchError(err => {
        this.router.navigate([`/error/${err.status || 500}`]);
        return of(false);
      })
    );
  }
}
