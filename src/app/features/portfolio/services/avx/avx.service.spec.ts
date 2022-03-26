import { TestBed } from '@angular/core/testing';

import { AvxService } from './avx.service';

describe('AvxService', () => {
  let service: AvxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
