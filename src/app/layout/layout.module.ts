import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
