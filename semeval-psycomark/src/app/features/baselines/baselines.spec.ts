import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baselines } from './baselines';

describe('Baselines', () => {
  let component: Baselines;
  let fixture: ComponentFixture<Baselines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Baselines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baselines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
