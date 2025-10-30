import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  text: string = 'Hello World!';
  num: number = 123.123;
  user: any = {
    firstName: 'John',
    lastName: 'Doe'
  };
  date: Date = new Date();
  text1: string = 'This is an example of interpolation binding in Angular.';
  name: string = '';
  classPB: string = ' text-danger p-3 border bg-light';
  isDisabled: boolean = false;

  onClick() {
    this.isDisabled = true;
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  };

  alertName(name: string) {
    alert(name);
  }

}
