import { TestBed } from '@angular/core/testing';

import { RestTableService } from './rest-table.service';

describe('RestTableService', () => {
  let service: RestTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
