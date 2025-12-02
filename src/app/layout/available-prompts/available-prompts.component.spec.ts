import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePromptsComponent } from './available-prompts.component';

describe('AvailablePromptsComponent', () => {
  let component: AvailablePromptsComponent;
  let fixture: ComponentFixture<AvailablePromptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePromptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailablePromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
