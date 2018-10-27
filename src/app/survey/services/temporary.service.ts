import { Injectable } from '@angular/core';
import { SurveyApiService } from './survey-api.service';

@Injectable({
  providedIn: 'root'
})
export class TemporaryService {

  constructor(private _apiService: SurveyApiService) {
  }

  getAllSurveys() {
    return this._apiService.getAll();
  }
}
