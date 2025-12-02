import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesAndSubscriptionsComponent } from './dues-and-subscriptions.component';

describe('DuesAndSubscriptionsComponent', () => {
  let component: DuesAndSubscriptionsComponent;
  let fixture: ComponentFixture<DuesAndSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuesAndSubscriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuesAndSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
