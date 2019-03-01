import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';
import { environment } from '../../../environments/environment';

const apiUrl = environment.mockApiUrl;

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  constructor(private _http: HttpClient) {
  }

  getAllSurveys() {
    const url = `${apiUrl}/survey`;

    return this._http.get<Survey[]>(url);
  }

  getSurveyById(id: string) {
    const url = `${apiUrl}/survey/${id}`;

    return this._http.get<Survey>(url);
  }

  createNewSurvey(survey: Survey) {
    const url = `${apiUrl}/survey`;

    return this._http.post<Survey>(url, survey);
  }
}
