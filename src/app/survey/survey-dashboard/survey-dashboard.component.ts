import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../model/survey';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: [ './survey-dashboard.component.scss' ]
})
export class SurveyDashboardComponent implements OnInit {

  surveys: Survey[];

  constructor(private _questionService: SurveyService,
              private _router: Router) {
  }

  ngOnInit() {
    this._loadSurveys();
  }

  private _loadSurveys() {
    this._questionService.getAllSurveysMetadata()
      .subscribe(data => this.surveys = data);
  }

  redirectToSurvey(id: string) {
    this._router.navigate([ 'surveys', id ]);
  }

}
