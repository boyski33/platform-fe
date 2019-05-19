import { Component, OnDestroy, OnInit } from '@angular/core';
import { Survey } from '../model/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Question } from '../model/question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { Submission } from '../model/submission';
import { AnsweredQuestion } from '../model/answered-question';
import { UtilService } from '../../general/services/util.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'submission-page',
  templateUrl: './submission-form.component.html',
  styleUrls: [ './submission-form.component.scss' ]
})
export class SubmissionFormComponent implements OnInit, OnDestroy {

  survey: Survey;
  form: FormGroup;
  submitIcon = faCheck;
  backIcon = faChevronLeft;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private surveyService: SurveyService,
              private questionControlService: QuestionControlService,
              private utilService: UtilService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.surveyService.getSurvey(params.get('id'))),
      takeUntil(this.componentDestroyed$)
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

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  navigateBack() {
    if (!this.form.touched) {
      this.router.navigateByUrl('/surveys/dashboard');
    } else {
      this.utilService.openConfirmationDialog()
        .then(() => {
          this.router.navigateByUrl('/surveys/dashboard');
        })
        .catch(() => {
          console.log('Closed with NO.');
        });
    }
  }

  createFormFromSurvey(survey: Survey) {
    const questions = survey.questions || [];
    this.form = this.questionControlService.toFormGroup(questions);
  }

  submitForm() {
    this.utilService.openConfirmationDialog()
      .then(() => {
        this.assembleAndPostSubmission();
      })
      .catch(() => {
        console.log('Closed with NO.');
      });
  }

  private assembleAndPostSubmission() {
    this.spinner.show();

    this.surveyService.postSubmission(this.assembleSubmissionObject())
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(
        s => {
          this.router.navigate([ '..' ], { relativeTo: this.route });
          this.spinner.hide();
        },
        e => {
          this.utilService.openSimpleDialog(e.error.error);
          this.spinner.hide();
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
