import { TestBed } from '@angular/core/testing';

import { AnswersLegalInstrumentService } from './answers-legal-instrument.service';

describe('AnswersLegalInstrumentService', () => {
  let service: AnswersLegalInstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswersLegalInstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
