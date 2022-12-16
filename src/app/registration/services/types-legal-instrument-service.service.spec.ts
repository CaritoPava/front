import { TestBed } from '@angular/core/testing';

import { TypesLegalInstrumentServiceService } from './types-legal-instrument-service.service';

describe('TypesLegalInstrumentServiceService', () => {
  let service: TypesLegalInstrumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesLegalInstrumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
