import { TestBed } from '@angular/core/testing';

import { TemporaryService } from './temporary.service';

describe('TemporaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemporaryService = TestBed.get(TemporaryService);
    expect(service).toBeTruthy();
  });
});
