import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { Submission } from '../../survey/model/submission';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Survey } from '../../survey/model/survey';

@Component({
  selector: 'app-survey-report',
  templateUrl: './survey-report.component.html',
  styleUrls: [ './survey-report.component.scss' ]
})
export class SurveyReportComponent implements OnInit {

  submissions: Submission[];

  constructor(private _surveyService: SurveyService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this._route.paramMap.pipe(
      switchMap(params => this._getSubmissionsForSurvey(params.get('surveyId')))
    ).subscribe(
      data => {
        this.submissions = data;
      },
      e => {
        console.error(e);
      }
    );
  }

  navigateBack() {
    this._router.navigate([ '..' ], { relativeTo: this._route });
  }

  private _getSubmissionsForSurvey(surveyId: string) {
    return this._surveyService.getSubmissionsForSurvey(surveyId);
  }

  get surveyTitle(): string {
    if (this.submissions && this.submissions.length > 0) {
      return this.submissions[0].survey.title;
    }

    return '';
  }

}
