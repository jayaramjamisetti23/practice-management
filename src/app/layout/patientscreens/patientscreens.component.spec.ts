import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientscreensComponent } from './patientscreens.component';

describe('PatientscreensComponent', () => {
  let component: PatientscreensComponent;
  let fixture: ComponentFixture<PatientscreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientscreensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientscreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
