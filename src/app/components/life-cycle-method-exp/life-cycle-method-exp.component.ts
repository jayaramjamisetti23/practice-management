import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-life-cycle-method-exp',
  templateUrl: './life-cycle-method-exp.component.html',
  styleUrl: './life-cycle-method-exp.component.scss'
})
export class LifeCycleMethodExpComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputValue: string = 'default';
  @Input() trigger?: number;

  @ViewChild('viewInput') viewInputRef!: ElementRef<HTMLInputElement>;
  @ContentChild('contentSlot') contentSlotRef!: ElementRef;

  private timerSub?: Subscription;
  public isFlagOn: boolean = false;
  private previousInputValue: string = '';

  constructor() {
    console.log('LifeCycleMethodExp: constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('LifeCycleMethodExp: ngOnChanges', changes);
    if (changes['inputValue'] && !changes['inputValue'].isFirstChange()) {
      console.log('Input value changed from', this.previousInputValue, 'to', this.inputValue);
      this.previousInputValue = this.inputValue;
    }
  }

  ngOnInit() {
    console.log('LifeCycleMethodExp: ngOnInit');
    this.timerSub = interval(1000).subscribe(n => {
      console.log('tick', n);
    });
  }

  ngDoCheck() {
    // Optional: custom change detection
  }

  ngAfterContentInit() {
    console.log('LifeCycleMethodExp: ngAfterContentInit', this.contentSlotRef?.nativeElement?.textContent);
  }

  ngAfterContentChecked() {
    console.log('LifeCycleMethodExp: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('LifeCycleMethodExp: ngAfterViewInit');
    if (this.viewInputRef) {
      this.viewInputRef.nativeElement.focus();
    }
  }

  ngAfterViewChecked() {
    // Optional
  }

  ngOnDestroy() {
    console.log('LifeCycleMethodExp: ngOnDestroy');
    this.timerSub?.unsubscribe();
  }

  toggleFlag() {
    this.isFlagOn = !this.isFlagOn;
  }
}