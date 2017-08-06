import { TestBed, inject } from '@angular/core/testing';

import { NumbersStoreService } from './numbers-store.service';

describe('NumbersStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbersStoreService]
    });
  });

  it('should be created', inject([NumbersStoreService], (service: NumbersStoreService) => {
    expect(service).toBeTruthy();
  }));
});
