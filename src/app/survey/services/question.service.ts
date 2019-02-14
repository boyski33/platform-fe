import { Injectable } from '@angular/core';
import { SurveyApiService } from './survey-api.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _apiService: SurveyApiService) {
  }

  getAllSurveys() {
    return this._apiService.getAll();
  }

  getSurvey(id: string) {
    return this._apiService.getById(id);
  }
}
