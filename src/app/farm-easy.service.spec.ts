import { TestBed } from '@angular/core/testing';

import { FarmEasyService } from './farm-easy.service';

describe('FarmEasyService', () => {
  let service: FarmEasyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmEasyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
