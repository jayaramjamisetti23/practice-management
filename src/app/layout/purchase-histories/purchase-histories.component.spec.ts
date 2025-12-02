import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoriesComponent } from './purchase-histories.component';

describe('PurchaseHistoriesComponent', () => {
  let component: PurchaseHistoriesComponent;
  let fixture: ComponentFixture<PurchaseHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseHistoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
