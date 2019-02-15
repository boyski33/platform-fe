import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../../model/survey';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: [ './thumbnail.component.scss' ]
})
export class ThumbnailComponent implements OnInit {

  @Input() survey: Survey;
  // surveyTitle: string;
  surveyDescription: string;
  takenByUser = false;

  buttonText = 'Take it!';
  disableBtn = false;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._styleButton();
    this.surveyDescription = this.survey.description;
  }

  openSubmissionPage() {
    this._router.navigate(['survey', this.survey.id]);
  }

  private _styleButton() {
    if (this.takenByUser) {
      this.buttonText = 'Taken';
      this.disableBtn = true;
    }
  }
}
