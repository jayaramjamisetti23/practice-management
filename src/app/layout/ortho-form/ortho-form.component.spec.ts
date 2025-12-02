import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthoFormComponent } from './ortho-form.component';

describe('OrthoFormComponent', () => {
  let component: OrthoFormComponent;
  let fixture: ComponentFixture<OrthoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrthoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrthoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
