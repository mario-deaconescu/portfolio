import { TestBed } from '@angular/core/testing';

import { ScreenSize } from './screen-size.service';

describe('ScreenSizeService', () => {
  let service: ScreenSize;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenSize);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
