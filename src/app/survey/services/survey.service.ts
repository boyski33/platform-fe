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

  // TODO: maybe refactor this service to returns entities and not observables

  constructor(private _surveyApi: SurveyApiService,
              private _submissionApi: SubmissionApiService) {
  }

  getAllSurveys(): Observable<Survey[]> {
    return this._surveyApi.getAllSurveys();
  }

  getSurvey(id: string): Observable<Survey> {
    // TODO: make sure questions are sorted by order
    return this._surveyApi.getSurveyById(id);
  }

  createNewSurvey(survey: Survey): Observable<Survey> {
    return this._surveyApi.postSurvey(survey);
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
