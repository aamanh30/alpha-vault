import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentService } from '../../services/payment/payment.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentConnectedGuard implements CanActivate, CanDeactivate<any> {
  constructor(private router: Router, private paymentService: PaymentService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.paymentService.getPaymentDetails().pipe(
      map(details => {
        if (details) {
          return true;
        }
        this.router.navigate(['/payment/connect']);
        return false;
      })
    );
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.paymentService.updatePaymentDetails(null);
    return true;
  }
}
