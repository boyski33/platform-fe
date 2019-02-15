import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';
import { environment } from '../../../environments/environment';
import { QuestionSet } from '../model/question-set';

const apiUrl = environment.mockApiUrl;

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  constructor(private _http: HttpClient) {
  }

  getAllSurveys() {
    const url = `${apiUrl}/surveys`;

    return this._http.get<Survey[]>(url);
  }

  getSurveyById(id: string) {
    const url = `${apiUrl}/surveys/${id}`;

    return this._http.get<Survey>(url);
  }

  getQuestionSetById(id: string) {
    const url = `${apiUrl}/question-set/${id}`;

    return this._http.get<QuestionSet>(url);
  }
}
