import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { HttpService } from '../../../../core/services/http/http.service';
import { environment } from '../../../../../environments/environment';
import { UserService } from '../../../../core/services/user/user.service';
import { stakeInfo } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class StakeService extends HttpService {
  constructor(protected http: HttpClient, private userService: UserService) {
    super(http);
    this.slug = `avx`;
  }

  stakeAmount({ stakingAmount }: any): Observable<any> {
    return this.userService.getUser().pipe(
      mergeMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/staking/saveUpdate`;
        return this.post(url, { email, stakingAmount });
      })
    );
  }

  getStakeAmount(): Observable<any> {
    return this.userService.getUser().pipe(
      switchMap(({ email }) => {
        const url = `${environment.baseUrl}${this.slug}/staking/${email}`;
        return this.get(url);
      }),
      map(({ data: amount }: any) => ({
        amount,
        heading: stakeInfo.heading,
        subHeading: stakeInfo.subHeading,
        currency: stakeInfo.currency
      }))
    );
  }
}
