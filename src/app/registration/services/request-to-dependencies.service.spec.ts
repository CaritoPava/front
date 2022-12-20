import { TestBed } from '@angular/core/testing';

import { RequestToDependenciesService } from './request-to-dependencies.service';

describe('RequestToDependenciesService', () => {
  let service: RequestToDependenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestToDependenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
