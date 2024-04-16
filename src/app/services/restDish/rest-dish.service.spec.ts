import { TestBed } from '@angular/core/testing';

import { RestDishService } from './rest-dish.service';

describe('RestDishService', () => {
  let service: RestDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
