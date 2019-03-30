import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../model/survey';
import { environment } from '../../../environments/environment';

const apiUrl = environment.coreSurveyServiceUrl;
const surveysUrl = `${apiUrl}/surveys`;

function headers() {
  const token = localStorage.getItem('access_token');

  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  };
}

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  constructor(private _http: HttpClient) {
  }

  getAllSurveys() {
    return this._http.get<Survey[]>(surveysUrl);
  }

  getAllSurveysMetadata() {
    const url = `${surveysUrl}?meta=true`;

    return this._http.get<Survey[]>(url);
  }

  getSurveyById(id: string) {
    const url = `${surveysUrl}/${id}`;

    return this._http.get<Survey>(url);
  }

  postSurvey(survey: Survey) {
    return this._http.post<Survey>(surveysUrl, survey, headers());
  }
}
