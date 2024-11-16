import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanIntegerComponent } from './roman-integer.component';

describe('RomanIntegerComponent', () => {
  let component: RomanIntegerComponent;
  let fixture: ComponentFixture<RomanIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanIntegerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
