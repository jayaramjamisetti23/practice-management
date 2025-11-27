import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {
  @Input() visible = false;
  @Input() title = "Form";
  @Output() onSubmit = new EventEmitter();
  @Output() onClose = new EventEmitter();
}
