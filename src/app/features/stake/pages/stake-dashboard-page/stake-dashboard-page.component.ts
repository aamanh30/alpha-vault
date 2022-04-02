import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBase } from '../../../../core/base';
import { StakeService } from '../../services/stake/stake.service';

@Component({
  selector: 'alpha-vault-stake-dashboard-page',
  templateUrl: './stake-dashboard-page.component.html',
  styleUrls: ['./stake-dashboard-page.component.scss']
})
export class StakeDashboardPageComponent extends PageBase implements OnInit {
  stakeAmount$: Observable<any> | null = null;
  constructor(private stakeService: StakeService) {
    super();
  }

  ngOnInit(): void {
    this.stakeAmount$ = this.stakeService.getStakeAmount();
  }
}
