import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';
import { environment } from '../../../environments/environment';

const apiUrl = environment.mockApiUrl;
const surveysUrl = `${apiUrl}/surveys`;

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  constructor(private _http: HttpClient) {
  }

  getAllSurveys() {
    return this._http.get<Survey[]>(surveysUrl);
  }

  getSurveyById(id: string) {
    const url = `${surveysUrl}/${id}`;

    return this._http.get<Survey>(url);
  }

  postSurvey(survey: Survey) {
    return this._http.post<Survey>(surveysUrl, survey);
  }
}
