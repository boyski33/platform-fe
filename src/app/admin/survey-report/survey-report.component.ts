import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { Submission } from '../../survey/model/submission';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuestionStats } from '../../survey/model/question-stats';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

@Component({
  selector: 'hippo-survey-report',
  templateUrl: './survey-report.component.html',
  styleUrls: [ './survey-report.component.scss' ]
})
export class SurveyReportComponent implements OnInit {

  submissions: Submission[];
  surveyStats: QuestionStats[];
  backIcon = faChevronLeft;

  constructor(private surveyService: SurveyService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.getSurveyReport(params.get('surveyId')))
    ).subscribe(
      report => {
        this.submissions = report.submissions;
        this.surveyStats = report.surveyStats;
      },
      e => {
        console.error(e);
      }
    );
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
