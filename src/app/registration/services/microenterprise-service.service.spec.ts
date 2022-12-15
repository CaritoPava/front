import { TestBed } from '@angular/core/testing';

import { MicroenterpriseServiceService } from './microenterprise-service.service';

describe('MicroenterpriseServiceService', () => {
  let service: MicroenterpriseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroenterpriseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
