import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Submission } from '../model/submission';

const apiUrl = environment.coreSurveyServiceUrl;
const submissionsUrl = `${apiUrl}/submissions`;

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
export class SubmissionApiService {

  constructor(private _http: HttpClient) {
  }

  getAllSubmissions() {
    return this._http.get<Submission[]>(submissionsUrl);
  }

  getSubmissionById(id: string) {
    const url = `${submissionsUrl}/${id}`;

    return this._http.get<Submission>(url);
  }

  getSubmissionsForSurvey(surveyId: string) {
    const url = `${submissionsUrl}/survey/${surveyId}`;

    return this._http.get<Submission[]>(url, headers());
  }

  getSubmissionsOfUser(userEmail: string) {
    const url = `${submissionsUrl}/user/${userEmail}`;

    return this._http.get<Submission[]>(url, headers());
  }

  postSubmission(submission: Submission) {
    return this._http.post<Submission>(submissionsUrl, submission);
  }

}
