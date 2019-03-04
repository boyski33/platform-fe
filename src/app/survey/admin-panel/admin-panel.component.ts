import { Component, OnInit } from '@angular/core';
import { Submission } from '../model/submission';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: [ './admin-panel.component.scss' ]
})
export class AdminPanelComponent implements OnInit {

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
