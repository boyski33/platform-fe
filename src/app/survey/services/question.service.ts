import { Injectable } from '@angular/core';
import { SurveyApiService } from './survey-api.service';
import { Observable } from 'rxjs';
import { Survey } from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _apiService: SurveyApiService) {
  }

  getAllSurveys(): Observable<Survey[]> {
    return this._apiService.getAllSurveys();
  }

  getSurvey(id: string): Observable<Survey> {
    return this._apiService.getSurveyById(id);
  }

}
