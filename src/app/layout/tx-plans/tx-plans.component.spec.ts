import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxPlansComponent } from './tx-plans.component';

describe('TxPlansComponent', () => {
  let component: TxPlansComponent;
  let fixture: ComponentFixture<TxPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TxPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
