import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsCompComponent } from './decorators-comp.component';

describe('DecoratorsCompComponent', () => {
  let component: DecoratorsCompComponent;
  let fixture: ComponentFixture<DecoratorsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoratorsCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoratorsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
