import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `<div class="layout-wrapper">
    <app-topbar></app-topbar>
    <div class="layout-container">
        <app-sidebar></app-sidebar>
        <div class="main-content">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
`,
    styleUrls: ['./layout.component.scss']

})
export class LayoutComponent {

}
