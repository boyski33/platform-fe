import { Component, OnDestroy, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../survey/model/survey';
import { AuthService } from '../../auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: [ './admin-dashboard.component.scss' ]
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  surveys: Survey[];
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private surveyService: SurveyService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getSurveysOfAuthenticatedUser();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  openSurveyReport(surveyId: string) {
    this.router.navigate([ surveyId ], { relativeTo: this.route });
  }

  private getSurveysOfAuthenticatedUser() {
    const userEmail = this.authService.getUserEmail();

    this.surveyService.getSurveysForOwner(userEmail)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => this.surveys = data);
  }
}
