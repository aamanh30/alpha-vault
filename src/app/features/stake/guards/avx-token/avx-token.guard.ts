import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../../../core/services/user/user.service';
import { AvxService } from '../../../portfolio/services/avx/avx.service';
@Injectable({
  providedIn: 'root'
})
export class AvxTokenGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private avxService: AvxService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.avxService.getAVXTokenBalance().pipe(
      map(({ amount }: any) => {
        this.userService.updateAVXBalance(amount);
        return true;
      })
    );
  }
}
