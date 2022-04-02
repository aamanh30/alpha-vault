import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../../../core/services/user/user.service';
import { StakeService } from '../../services/stake/stake.service';

@Injectable({
  providedIn: 'root'
})
export class AvxTokenGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private stakeService: StakeService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.getUser().pipe(
      switchMap(({ email }: any) => this.stakeService.getStakeAmount()),
      map(({ amount }: any) => {
        this.userService.updateAVXBalance(amount);
        return true;
      })
    );
  }
}
