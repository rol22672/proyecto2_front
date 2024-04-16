import { TestBed } from '@angular/core/testing';

import { RestAreaService } from './rest-area.service';

describe('RestAreaService', () => {
  let service: RestAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
