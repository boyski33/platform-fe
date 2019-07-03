import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../model/survey';
import { environment } from '../../../environments/environment';
import { SurveyReport } from '../model/survey-report';

const apiUrl = environment.coreSurveyServiceUrl;
const surveysUrl = `${apiUrl}/surveys`;

function headers() {
  const token = localStorage.getItem('access_token');

  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
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

  getSurveysForOwner(ownerEmail: string) {
    const url = `${surveysUrl}/user/${ownerEmail}`;

    return this._http.get<Survey[]>(url, headers());
  }

  getSurveysForUser(userEmail: string) {
    const url = `${surveysUrl}/for-user/${userEmail}`;

    return this._http.get<Survey[]>(url, headers());
  }

  postSurvey(survey: Survey) {
    return this._http.post<Survey>(surveysUrl, survey, headers());
  }

  getReportForSurvey(surveyId: string) {
    const url = `${surveysUrl}/report/${surveyId}`;

    return this._http.get<SurveyReport>(url);
  }
}
