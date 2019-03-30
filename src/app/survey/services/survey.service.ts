import { Injectable } from '@angular/core';
import { SurveyApiService } from './survey-api.service';
import { Observable } from 'rxjs';
import { Survey } from '../model/survey';
import { Submission } from '../model/submission';
import { SubmissionApiService } from './submission-api.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private surveyApi: SurveyApiService,
              private submissionApi: SubmissionApiService,
              private authService: AuthService) {
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
    return this.surveyApi.getAllSurveys();
  }

  getAllSurveysMetadata(): Observable<Survey[]> {
    return this.surveyApi.getAllSurveysMetadata();
  }

  getSurvey(id: string): Observable<Survey> {
    // TODO: make sure questions are sorted by order
    return this.surveyApi.getSurveyById(id);
  }

  createNewSurvey(survey: Survey): Observable<Survey> {
    survey.ownerEmail = this.authService.getUserEmail();
    SurveyService._assembleSurveyQuestions(survey);

    return this.surveyApi.postSurvey(survey);
  }

  getAllSubmissions(): Observable<Submission[]> {
    return this.submissionApi.getAllSubmissions();
  }

  getSubmission(id: string): Observable<Submission> {
    return this.submissionApi.getSubmissionById(id);
  }

  getSubmissionsForSurvey(surveyId: string): Observable<Submission[]> {
    return this.submissionApi.getSubmissionsForSurvey(surveyId);
  }

  postSubmission(submission: Submission): Observable<Submission> {
    return this.submissionApi.postSubmission(submission);
  }

}
