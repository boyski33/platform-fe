import { Component, OnInit } from '@angular/core';
import { Submission } from '../../survey/model/submission';
import { SurveyService } from '../../survey/services/survey.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: [ './admin-dashboard.component.scss' ]
})
export class AdminDashboardComponent implements OnInit {

  submissions: Submission[];

  constructor(private _surveyService: SurveyService) {
  }

  ngOnInit() {
    this._getSubmissions();
  }

  private _getSubmissions() {
    this._surveyService.getAllSubmissions().subscribe(data => {
      this.submissions = data;
    });
  }
}
