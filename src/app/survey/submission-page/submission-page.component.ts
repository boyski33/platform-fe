import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../model/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Question } from '../model/question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'submission-page',
  templateUrl: './submission-page.component.html',
  styleUrls: ['./submission-page.component.scss']
})
export class SubmissionPageComponent implements OnInit {

  survey: Survey;
  form: FormGroup;
  formValue = '';

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _surveyService: SurveyService,
              private _questionControlService: QuestionControlService) {
  }

  ngOnInit() {
    this._route.paramMap.pipe(
      switchMap(params => this._surveyService.getSurvey(params.get('id')))
    ).subscribe(s => {
        this.survey = s;
        this.createFormFromSurvey(s);
      },
      e => {
        this.displayErrorDialog(JSON.stringify(e));
      }
    );
  }

  createFormFromSurvey(survey: Survey) {
    const questions = survey.questions || [];
    this.form = this._questionControlService.toFormGroup(questions);
  }

  onSubmit() {
    this.formValue = JSON.stringify(this.form.value);
  }

  displayErrorDialog(error: string) {
    // TODO: add a modal window when showing errors, or extract extract it in a service
    alert(error);
  }

}
