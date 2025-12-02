import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoNotesComponent } from './auto-notes.component';

describe('AutoNotesComponent', () => {
  let component: AutoNotesComponent;
  let fixture: ComponentFixture<AutoNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
