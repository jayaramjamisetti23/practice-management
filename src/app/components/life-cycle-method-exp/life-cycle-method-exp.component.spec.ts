import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleMethodExpComponent } from './life-cycle-method-exp.component';

describe('LifeCycleMethodExpComponent', () => {
  let component: LifeCycleMethodExpComponent;
  let fixture: ComponentFixture<LifeCycleMethodExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleMethodExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCycleMethodExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
