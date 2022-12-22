import { TestBed } from '@angular/core/testing';

import { DocumentsAndReportsService } from './documents-and-reports.service';

describe('DocumentsAndReportsService', () => {
  let service: DocumentsAndReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsAndReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
