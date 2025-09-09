import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationInstructionsComponent } from './annotation-instructions';

describe('AnnotationInstructions', () => {
  let component: AnnotationInstructionsComponent;
  let fixture: ComponentFixture<AnnotationInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotationInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
