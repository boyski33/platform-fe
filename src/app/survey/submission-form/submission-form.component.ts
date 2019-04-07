import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../model/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Question } from '../model/question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { Submission } from '../model/submission';
import { User } from '../../user/model/user';
import { AnsweredQuestion } from '../model/answered-question';
import { UtilService } from '../../general/services/util.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'submission-page',
  templateUrl: './submission-form.component.html',
  styleUrls: [ './submission-form.component.scss' ]
})
export class SubmissionFormComponent implements OnInit {

  survey: Survey;
  form: FormGroup;
  submitIcon = faCheck;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _surveyService: SurveyService,
              private _questionControlService: QuestionControlService,
              private _utilService: UtilService) {
  }

  ngOnInit() {
    this._route.paramMap.pipe(
      switchMap(params => this._surveyService.getSurvey(params.get('id')))
    ).subscribe(s => {
        this.survey = s;
        this.createFormFromSurvey(s);
      },
      e => {
        this._utilService.openSimpleDialog('Something went wrong');
        console.error(e);
      }
    );
  }

  createFormFromSurvey(survey: Survey) {
    // TODO: make use of the Question constructor or use interfaces
    const questions = survey.questions || [];
    this.form = this._questionControlService.toFormGroup(questions);
  }

  submitForm() {
    const submission = this._assembleSubmissionObject();

    this._surveyService.postSubmission(submission).subscribe(
      s => {
        this._router.navigate([ '..' ], { relativeTo: this._route });
      },
      e => {
        this._utilService.openSimpleDialog(e.error.error);
      }
    );
  }

  private _assembleSubmissionObject(): Submission {
    const answers = this._getSurveyAnswers();

    return new Submission(null, this.survey, answers);
  }

  private _getSurveyAnswers(): AnsweredQuestion[] {
    const answers = [];
    this.survey.questions.forEach(question => {
      answers.push(this._assembleAnswerObject(question));
    });

    return answers;
  }

  private _assembleAnswerObject(question: Question): AnsweredQuestion {
    const answer = this.form.controls[question.key].value;

    return new AnsweredQuestion(question, answer);
  }

}
