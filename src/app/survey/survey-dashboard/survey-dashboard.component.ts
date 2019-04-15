import { Component, OnDestroy, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../model/survey';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: [ './survey-dashboard.component.scss' ]
})
export class SurveyDashboardComponent implements OnInit, OnDestroy {

  surveys: Survey[];
  loggedInUser: string | null;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private surveyService: SurveyService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getUserEmail();
    this.loadSurveys();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  redirectToSurvey(id: string) {
    this.router.navigate([ 'surveys', id ]);
  }

  private loadSurveys() {
    if (this.loggedInUser) {
      this.surveyService.getSurveysForUser(this.loggedInUser)
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(data => this.surveys = data);
    } else {
      this.surveyService.getAllSurveysMetadata()
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(data => this.surveys = data);
    }
  }
}
