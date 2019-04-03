import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SurveyService } from '../../survey/services/survey.service';
import { Observable } from 'rxjs';
import { Submission } from '../../survey/model/submission';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.scss']
})
export class UserSubmissionsComponent implements OnInit {

  submissions: Submission[];
  private readonly userEmail = this.authService.getUserEmail();
  private hasUser = true;

  constructor(private authService: AuthService,
              private userService: UserService,
              private surveyService: SurveyService) { }

  ngOnInit() {
    this.getSubmissionsOfUser();
    this.getUserDetails();
  }

  getSubmissionsOfUser() {
    this.surveyService.getSubmissionsOfUser(this.userEmail)
      .subscribe(data => this.submissions = data);
  }

  private getUserDetails() {
    return this.userService.getUserByEmail(this.userEmail)
      .subscribe(user => this.hasUser = user.id !== null);
  }

}
