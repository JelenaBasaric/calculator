import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllButtonComponent } from './all-button.component';

describe('AllButtonComponent', () => {
  let component: AllButtonComponent;
  let fixture: ComponentFixture<AllButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllButtonComponent]
    });
    fixture = TestBed.createComponent(AllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
