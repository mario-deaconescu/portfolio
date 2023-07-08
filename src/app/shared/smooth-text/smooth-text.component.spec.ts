import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothTextComponent } from './smooth-text.component';

describe('SmoothTextComponent', () => {
  let component: SmoothTextComponent;
  let fixture: ComponentFixture<SmoothTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmoothTextComponent]
    });
    fixture = TestBed.createComponent(SmoothTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
