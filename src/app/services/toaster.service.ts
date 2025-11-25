import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) { }

  show(message: string, type: 'success' | 'error' | 'warn', position: string = 'top-right') {

    this.messageService.add({
      severity: type,
      summary: type.charAt(0).toUpperCase() + type.slice(1),
      detail: message,
      life: type === 'success' ? 4000 : 2000,
      key: position
    });
  }

  success(msg: string) {
    this.show(msg, 'success');
  }

  error(msg: string) {
    this.show(msg, 'error');
  }

  warn(msg: string) {
    this.show(msg, 'warn');
  }
}
