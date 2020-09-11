import { TestBed } from '@angular/core/testing';

import { ItemInBoxService } from './item-in-box.service';

describe('ItemInBoxService', () => {
  let service: ItemInBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemInBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
