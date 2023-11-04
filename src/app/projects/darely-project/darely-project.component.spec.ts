import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarelyProjectComponent } from './darely-project.component';

describe('DarelyProjectComponent', () => {
  let component: DarelyProjectComponent;
  let fixture: ComponentFixture<DarelyProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarelyProjectComponent]
    });
    fixture = TestBed.createComponent(DarelyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
