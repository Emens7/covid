import { TestBed } from '@angular/core/testing';

import { HopkinsService } from './hopkins.service';

describe('HopkinsService', () => {
  let service: HopkinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HopkinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
