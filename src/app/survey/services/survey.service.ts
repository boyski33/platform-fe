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

  // TODO: refactor this service to returns entities and not observables
  // TODO: extract error handling logic here

  constructor(private _surveyApi: SurveyApiService,
              private _submissionApi: SubmissionApiService) {
  }

  /**
   * A helper method:
   * Before submitting the survey, first make sure every question
   * and question option (if applicable) have a unique key.
   *
   * @param survey the actual Survey object
   */
  private static _assembleSurveyQuestions(survey: Survey) {
    survey.questions.forEach((question, i) => {

      question.key = `key${i}`;
      question.order = i;

      if (question.options) {
        question.options.forEach((option, j) => {
          option.key = `option${j}`;
        });
      }

    });
  }

  getAllSurveys(): Observable<Survey[]> {
    return this._surveyApi.getAllSurveys();
  }

  getAllSurveysMetadata(): Observable<Survey[]> {
    return this._surveyApi.getAllSurveysMetadata();
  }

  getSurvey(id: string): Observable<Survey> {
    // TODO: make sure questions are sorted by order
    return this._surveyApi.getSurveyById(id);
  }

  createNewSurvey(survey: Survey): Observable<Survey> {
    SurveyService._assembleSurveyQuestions(survey);

    return this._surveyApi.postSurvey(survey);
  }

  getAllSubmissions(): Observable<Submission[]> {
    return this._submissionApi.getAllSubmissions();
  }

  getSubmission(id: string): Observable<Submission> {
    return this._submissionApi.getSubmissionById(id);
  }

  getSubmissionsForSurvey(surveyId: string): Observable<Submission[]> {
    return this._submissionApi.getSubmissionsForSurvey(surveyId);
  }

  postSubmission(submission: Submission): Observable<Submission> {
    return this._submissionApi.postSubmission(submission);
  }

}
