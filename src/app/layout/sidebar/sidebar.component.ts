import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

interface MenuItem {
  displayTitle: string;
  icon: string;
  route?: string;
  submenus?: MenuItem[];
  open?: boolean;      // for expand/collapse
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  menuList: MenuItem[] = [
    { displayTitle: 'Users', icon: "person", route: '/users' },

    {
      displayTitle: 'Configuration',
      icon: "settings",
      route: '/configuration',
      open: false,
      submenus: [
        { displayTitle: 'Settings', icon: "tune", route: '/settings' },
        { displayTitle: 'Billing', icon: "credit_card", route: '/billing' }
      ]
    }
  ];

  constructor(private api: ApiService) {
    api.request('GET', APP_APICALLS.MenuList).subscribe(res => {
      this.menuList = res?.menulists || this.menuList;
    });
  }

  toggle(item: MenuItem) {
    if (item.submenus) {
      item.open = !item.open;
    }
  }
}
