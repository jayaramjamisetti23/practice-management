import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // use like <p appHighlight></p>
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})

export class ThreeComponent {
  name: string = 'Three Component';
  strLength = this.getStringLength(this.name);
  array: number[] = [10, 20, 30, 40, 50];
  result: string = this.getSingleValue<string>(this.name);
  reversedArray: number[] = this.reverseArray<number>([...this.array]);
  details: { name: string; address: string } = { name: this.name, address: 'Sample Address' };
  generalDetails: { gender: string; dOB: string } = { gender: 'Male', dOB: '01-01-1990' };
  fullDetails: { name: string; address: string; gender: string; dOB: string } = this.mergeObjects(this.details, this.generalDetails);

  pairData = this.makePair<number>(1, 2);
  addNum = this.addNumbers<number>(5, 10);

  constructor() {
    console.log('ThreeComponent initialized', this);
    console.log('Narrowing with Assertions', this.getName(this.name), '----', this.getName(this.details))

    interface Comparator {
      (a: number, b: number): number;
    }

    function sortNumbers(arr: number[], compare: Comparator): number[] {
      return arr.slice().sort(compare);
    }

    const ascending: Comparator = (a, b) => a - b;
    console.log(sortNumbers([3, 1, 4, 2], ascending));
  }

  getSingleValue<T>(arg: T): T {// Basic Generic Function
    return arg;
  }

  reverseArray<T>(arr: T[]): T[] {//Generic Array Function
    return arr.reverse();
  }

  getStringLength<T extends { length: number }>(arg: T): number {//Generic with Constraints
    return arg.length;
  }

  mergeObjects<T, U>(obj1: T, obj2: U): T & U {//Multiple Generic Types
    return { ...obj1, ...obj2 };
  }

  makePair<T>(a: T, b: T): [T, T] {//Generic Tuple Function
    return [b, a];
  }

  addNumbers<T extends number>(a: T, b: T): T {//Generic Function with Number Constraint
    return (a + b) as T;
  }
  getName(obj: string | { name: string }): string {//Narrowing with Assertions
    return typeof obj === "string" ? obj : (obj as { name: string }).name;
  }
}
