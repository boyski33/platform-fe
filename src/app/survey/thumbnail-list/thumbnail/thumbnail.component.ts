import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../../../model/survey';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() survey: Survey;
  // surveyTitle: string;
  surveyDescription: string;
  takenByUser = false;

  buttonText = 'Take it!';
  disableBtn = false;

  constructor() { }

  ngOnInit() {
    this._styleButton();
    this.surveyDescription = this.survey.description;
  }

  private _styleButton() {
    if (this.takenByUser) {
      this.buttonText = 'Taken';
      this.disableBtn = true;
    }
  }
}
