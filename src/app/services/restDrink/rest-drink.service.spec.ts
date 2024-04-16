import { TestBed } from '@angular/core/testing';

import { RestDrinkService } from './rest-drink.service';

describe('RestDrinkService', () => {
  let service: RestDrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
