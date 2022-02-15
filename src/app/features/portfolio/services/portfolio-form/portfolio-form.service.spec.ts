import { TestBed } from '@angular/core/testing';

import { PortfolioFormService } from './portfolio-form.service';

describe('PortfolioFormService', () => {
  let service: PortfolioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
