import { TestBed } from '@angular/core/testing';

import { SurveyApiService } from './survey-api.service';

describe('SurveyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyApiService = TestBed.get(SurveyApiService);
    expect(service).toBeTruthy();
  });
});
