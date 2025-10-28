import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private names: string[] = ['Alice', 'Bob', 'Charlie'];
  constructor() { }

  getData(): string[] {
    return this.names;
  }

  addNameAtFirst(name: string) {
    this.names.unshift(name);
  }

  addNameAtLast(name: string) {
    this.names.push(name);
  }

  removeLastName() {
    this.names.pop();
  }

  removeFirstName() {
    this.names.shift();
  }
}
