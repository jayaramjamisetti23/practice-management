import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {
  count = 0;

  // constructor(count: number) {
  //   this.count = count;
  // }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
