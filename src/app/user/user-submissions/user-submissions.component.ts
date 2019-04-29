import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SurveyService } from '../../survey/services/survey.service';
import { Observable, Subject } from 'rxjs';
import { Submission } from '../../survey/model/submission';
import { UserService } from '../services/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: [ './user-submissions.component.scss' ]
})
export class UserSubmissionsComponent implements OnInit, OnDestroy {

  submissions: Submission[];
  componentDestroyed$: Subject<boolean> = new Subject();

  hasUser = true;
  private readonly userEmail = this.authService.getUserEmail();

  constructor(private authService: AuthService,
              private userService: UserService,
              private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.getSubmissionsOfUser();
    this.getUserDetails();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  getSubmissionsOfUser() {
    this.surveyService.getSubmissionsOfUser(this.userEmail)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => this.submissions = data);
  }

  private getUserDetails() {
    return this.userService.getUserByEmail(this.userEmail)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(user => this.hasUser = user.id !== null);
  }

}
