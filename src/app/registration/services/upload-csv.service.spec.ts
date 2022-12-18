import { TestBed } from '@angular/core/testing';

import { UploadCSVService } from './upload-csv.service';

describe('UploadCSVService', () => {
  let service: UploadCSVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCSVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
