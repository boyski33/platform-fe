import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../survey/model/survey';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: [ './admin-dashboard.component.scss' ]
})
export class AdminDashboardComponent implements OnInit {

  surveys: Survey[];

  constructor(private surveyService: SurveyService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getSurveysOfAuthenticatedUser();
  }

  openSurveyReport(surveyId: string) {
    this.router.navigate([ surveyId ], { relativeTo: this.route });
  }

  private getSurveysOfAuthenticatedUser() {
    const userEmail = this.authService.getUserEmail();
    console.log(userEmail);

    this.surveyService.getSurveysForOwner(userEmail)
      .subscribe(data => this.surveys = data);
  }
}
