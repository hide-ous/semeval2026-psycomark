import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatedExampleComponent } from './annotated-example';

describe('AnnotatedExample', () => {
  let component: AnnotatedExampleComponent;
  let fixture: ComponentFixture<AnnotatedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotatedExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotatedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
