import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { UserService } from '../../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let canActivate$: Observable<boolean>;
    switch (state.url) {
      case '/home': {
        canActivate$ = this.userService.getUser().pipe(
          mergeMap(user => {
            if (user) {
              this.router.navigate(['/home/main']);
            }
            return user ? of(false) : of(true);
          })
        );
        break;
      }
      case '/home/main': {
        canActivate$ = this.userService.getUser().pipe(
          mergeMap(user => {
            if (!user) {
              this.router.navigate(['/home']);
            }
            return user ? of(true) : of(false);
          })
        );
        break;
      }
      default: {
        canActivate$ = of(true);
      }
    }
    return canActivate$;
  }
}
