import { Component } from '@angular/core';
import { SideNavConfig } from './../../configs';

@Component({
  selector: 'alpha-vault-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navList = SideNavConfig;
  constructor() {}
}
