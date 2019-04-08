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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private surveyService: SurveyService,
              private questionControlService: QuestionControlService,
              private utilService: UtilService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.surveyService.getSurvey(params.get('id')))
    ).subscribe(s => {
        this.survey = s;
        this.createFormFromSurvey(s);
      },
      e => {
        this.utilService.openSimpleDialog('Something went wrong');
        console.error(e);
      }
    );
  }

  createFormFromSurvey(survey: Survey) {
    // TODO: make use of the Question constructor or use interfaces
    const questions = survey.questions || [];
    this.form = this.questionControlService.toFormGroup(questions);
  }

  submitForm() {
    this.utilService.openConfirmationDialog()
      .then(() => {
        this.assembleAndPostSubmission();
      })
      .catch(() => {
        console.log('Closed');
      });
  }

  private assembleAndPostSubmission() {
    const submission = this.assembleSubmissionObject();

    this.surveyService.postSubmission(submission).subscribe(
      s => {
        this.router.navigate([ '..' ], { relativeTo: this.route });
      },
      e => {
        this.utilService.openSimpleDialog(e.error.error);
      }
    );
  }

  private assembleSubmissionObject(): Submission {
    const answers = this.getSurveyAnswers();

    return new Submission(null, this.survey, answers);
  }

  private getSurveyAnswers(): AnsweredQuestion[] {
    const answers = [];
    this.survey.questions.forEach(question => {
      answers.push(this.assembleAnswerObject(question));
    });

    return answers;
  }

  private assembleAnswerObject(question: Question): AnsweredQuestion {
    const answer = this.form.controls[question.key].value;

    return new AnsweredQuestion(question, answer);
  }

}
