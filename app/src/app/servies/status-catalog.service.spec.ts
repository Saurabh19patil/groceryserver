import { TestBed } from '@angular/core/testing';

import { StatusCatalogService } from './status-catalog.service';

describe('StatusCatalogService', () => {
  let service: StatusCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
