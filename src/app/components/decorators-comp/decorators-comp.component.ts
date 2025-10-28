import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/Data/data.service';

@Component({
  selector: 'app-decorators-comp',
  templateUrl: './decorators-comp.component.html',
  styleUrl: './decorators-comp.component.scss'
})
export class DecoratorsCompComponent {
  names: string[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.names = this.dataService.getData();
  }

  clearName(inputElement: HTMLInputElement): void {
    inputElement.value = '';
  }

  addName(type: string, inputElement: HTMLInputElement): void {
    const name: string = inputElement.value;
    if (type == 'start') {
      this.dataService.addNameAtFirst(name);
    } else {
      this.dataService.addNameAtLast(name);
    }

    inputElement.value = '';
    this.names = this.dataService.getData();
  }

  removeName(type: string): void {
    if (type == 'start') {
      this.dataService.removeFirstName();
    } else {
      this.dataService.removeLastName();
    }
    this.names = this.dataService.getData();
  }
}


// Input/Output
// Child Component
@Component({
  selector: 'app-child',
  standalone: true,
  template: `<div class="border-5 p-3">
     <h2>Child Component</h2>
    <button (click)="notify()" class="btn btn-primary"><ng-content></ng-content></button>
  </div>`
})
export class ChildComponent {
  @Output() clicked = new EventEmitter<void>();

  notify() {
    this.clicked.emit();
  }
}

// Parent Component
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <div class="border-5 p-3">
      <h2>Parent Component</h2>
      <app-child (clicked)="onChildClick()">Notify Parent 1</app-child>
    </div>
  `
})

export class ParentComponent {
  onChildClick() {
    console.log('Child clicked!');
    alert('nnn')
    // You can add more logic here
  }
}