import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjspracticeComponent } from './rxjspractice.component';

describe('RxjspracticeComponent', () => {
  let component: RxjspracticeComponent;
  let fixture: ComponentFixture<RxjspracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjspracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjspracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
