import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent {
  @Input() value = '';
  @Input() color: 'success' | 'danger' | 'info' | 'warning' = 'info';
}
