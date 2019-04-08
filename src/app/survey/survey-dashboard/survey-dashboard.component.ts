import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../model/survey';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: [ './survey-dashboard.component.scss' ]
})
export class SurveyDashboardComponent implements OnInit {

  surveys: Survey[];
  loggedInUser: string | null;

  constructor(private surveyService: SurveyService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getUserEmail();
    this.loadSurveys();
  }

  redirectToSurvey(id: string) {
    this.router.navigate([ 'surveys', id ]);
  }

  private loadSurveys() {
    if (this.loggedInUser) {
      this.surveyService.getSurveysForUser(this.loggedInUser)
        .subscribe(data => this.surveys = data);
    } else {
      this.surveyService.getAllSurveysMetadata()
        .subscribe(data => this.surveys = data);
    }
  }
}
