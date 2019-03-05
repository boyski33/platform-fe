import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../survey/model/survey';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: [ './admin-dashboard.component.scss' ]
})
export class AdminDashboardComponent implements OnInit {

  surveys: Survey[];

  constructor(private _surveyService: SurveyService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._getSurveys();
  }

  openSurveyReport(surveyId: string) {
    this._router.navigate([ surveyId ], { relativeTo: this._route });
  }

  private _getSurveys() {
    // TODO: get for user
    this._surveyService.getAllSurveys().subscribe(data => {
      this.surveys = data;
    });
  }
}
