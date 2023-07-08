import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFieldComponent } from './contact-field.component';

describe('ContactFieldComponent', () => {
  let component: ContactFieldComponent;
  let fixture: ComponentFixture<ContactFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFieldComponent]
    });
    fixture = TestBed.createComponent(ContactFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
