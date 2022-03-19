import { TestBed } from '@angular/core/testing';

import { PaymentConnectedGuard } from './payment-connected.guard';

describe('PaymentConnectedGuard', () => {
  let guard: PaymentConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
