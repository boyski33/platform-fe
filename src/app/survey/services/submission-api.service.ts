import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Submission } from '../model/submission';

const apiUrl = environment.coreSurveyServiceUrl;
const submissionsUrl = `${apiUrl}/submissions`;

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

    return this._http.get<Submission[]>(url);
  }

  postSubmission(submission: Submission) {
    return this._http.post<Submission>(submissionsUrl, submission);
  }

}
