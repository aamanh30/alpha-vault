import { Component, OnInit } from '@angular/core';

import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'alpha-vault-root',
  templateUrl: './alpha-vault.component.html',
  styleUrls: ['./alpha-vault.component.scss']
})
export class AlphaVaultComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.checkUser();
  }
}
