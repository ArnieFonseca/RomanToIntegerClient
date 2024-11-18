import { TestBed } from '@angular/core/testing';

import { GetEndpointsService } from './get-endpoints.service';

describe('GetEndpointsService', () => {
  let service: GetEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
