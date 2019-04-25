import { Component, OnDestroy, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { Submission } from '../../survey/model/submission';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { QuestionStats } from '../../survey/model/question-stats';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'hippo-survey-report',
  templateUrl: './survey-report.component.html',
  styleUrls: [ './survey-report.component.scss' ]
})
export class SurveyReportComponent implements OnInit, OnDestroy {

  submissions: Submission[];
  surveyStats: QuestionStats[];
  backIcon = faChevronLeft;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private surveyService: SurveyService,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(() => this.spinner.show()),
      switchMap(params => this.getSurveyReport(params.get('surveyId'))),
      takeUntil(this.componentDestroyed$)
    ).subscribe(
      report => {
        this.submissions = report.submissions;
        this.surveyStats = report.surveyStats;
        this.spinner.hide();
      },
      e => {
        console.error(e);
        this.spinner.hide();
      }
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  navigateBack() {
    this.router.navigate([ '..' ], { relativeTo: this.route });
  }

  private getSurveyReport(surveyId: string) {
    return this.surveyService.getReportForSurvey(surveyId);
  }

  get surveyTitle(): string {
    if (this.submissions && this.submissions.length > 0) {
      return this.submissions[0].survey.title;
    }

    return '';
  }

}
