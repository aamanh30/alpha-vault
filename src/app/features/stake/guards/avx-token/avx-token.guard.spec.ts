import { TestBed } from '@angular/core/testing';

import { AvxTokenGuard } from './avx-token.guard';

describe('AvxTokenGuard', () => {
  let guard: AvxTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AvxTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
