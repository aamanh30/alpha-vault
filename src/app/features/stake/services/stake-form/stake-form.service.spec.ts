import { TestBed } from '@angular/core/testing';

import { StakeFormService } from './stake-form.service';

describe('StakeFormService', () => {
  let service: StakeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
