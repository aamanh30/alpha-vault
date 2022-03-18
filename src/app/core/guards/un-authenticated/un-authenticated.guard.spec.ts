import { TestBed } from '@angular/core/testing';

import { UnAuthenticatedGuard } from './un-authenticated.guard';

describe('UnAuthenticatedGuard', () => {
  let guard: UnAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
