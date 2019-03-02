import { Injectable } from '@angular/core';
import { SurveyApiService } from './survey-api.service';
import { Observable } from 'rxjs';
import { Survey } from '../model/survey';
import { Submission } from '../model/submission';
import { SubmissionApiService } from './submission-api.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private _surveyApi: SurveyApiService,
              private _submissionApi: SubmissionApiService) {
  }

  getAllSurveys(): Observable<Survey[]> {
    return this._surveyApi.getAllSurveys();
  }

  getSurvey(id: string): Observable<Survey> {
    return this._surveyApi.getSurveyById(id);
  }

  getAllSubmissions(): Observable<Submission[]> {
    return this._submissionApi.getAllSubmissions();
  }

  getSubmission(id: string): Observable<Submission> {
    return this._submissionApi.getSubmissionById(id);
  }

  postSubmission(submission: Submission): Observable<Submission> {
    return this._submissionApi.postSubmission(submission);
  }

}
