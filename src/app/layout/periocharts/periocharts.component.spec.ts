import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriochartsComponent } from './periocharts.component';

describe('PeriochartsComponent', () => {
  let component: PeriochartsComponent;
  let fixture: ComponentFixture<PeriochartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriochartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriochartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
