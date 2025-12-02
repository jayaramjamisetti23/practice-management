import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule],
  exports: [LayoutComponent]
})
export class LayoutModule {

}
