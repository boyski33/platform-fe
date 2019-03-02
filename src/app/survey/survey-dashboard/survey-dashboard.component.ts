import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../model/survey';

@Component({
  selector: 'survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: [ './survey-dashboard.component.scss' ]
})
export class SurveyDashboardComponent implements OnInit {

  surveys: Survey[];

  constructor(private _questionService: SurveyService) {
  }

  ngOnInit() {
    this._loadSurveys();
  }

  private _loadSurveys() {
    this._questionService.getAllSurveys()
      .subscribe(data => this.surveys = data);
  }

}
