import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerRomanComponent } from './integer-roman.component';

describe('IntegerRomanComponent', () => {
  let component: IntegerRomanComponent;
  let fixture: ComponentFixture<IntegerRomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegerRomanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegerRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
