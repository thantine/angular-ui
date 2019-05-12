import { Component } from '@angular/core';

import { MenuItem } from '@thantine/thantine-angular-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public avatarUrl = 'assets/images/avatar.png';
  public logoUrl = 'assets/images/logo.png';

  public menuItems: MenuItem[] = [
    {href: '/menu-item-1', text: 'Menu item 1'},
    {href: '/menu-item-2', text: 'Menu item 2'},
  ];

  public userMenuItems: MenuItem[] = [
    {href: '/user-item-1', text: 'user item 1'},
    {href: '/user-item-2', text: 'user item 2'},
  ];

  public sidebarItems: MenuItem[] = [
    {href: '/sidebar-item-1', text: 'sidebar item 1'},
    {href: '/sidebar-item-2', text: 'sidebar item 2'},
  ];
}
