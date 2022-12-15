import { TestBed } from '@angular/core/testing';

import { LegalInstrumentServiceService } from './legal-instrument-service.service';

describe('LegalInstrumentServiceService', () => {
  let service: LegalInstrumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalInstrumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
