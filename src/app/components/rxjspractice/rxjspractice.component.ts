import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjspractice',
  templateUrl: './rxjspractice.component.html',
  styleUrl: './rxjspractice.component.scss'
})
export class RxjspracticeComponent {
  //observable example
  observable = new Observable(observer => {
    observer.next('Value 1');
    observer.next('Value 2');
    observer.complete();
  });

  //subject example
  subject = new Subject<string>();

  //behaviorSubject example
  behaviorSubject = new BehaviorSubject<string>('Initial Value');


  constructor() {
    this.subject.subscribe(val => console.log('Subscriber 1:', val));
    this.subject.subscribe(val => console.log('Subscriber 2:', val));

    this.behaviorSubject.subscribe(val => console.log('Subscriber 1:', val));
    this.behaviorSubject.next('Updated Value');
    this.behaviorSubject.subscribe(val => console.log('Subscriber 2:', val));
  }

  //observable example
  onclick() {
    this.observable.subscribe(value => alert(value));
  }

  //subject example
  emitValue() {

    this.subject.next('Hello from Subject! ' + Math.random());
  }

  //behaviorSubject example
  emitBehaviorValue() {
    this.behaviorSubject.next('Hello from BehaviorSubject! ' + Math.random());
  }
}