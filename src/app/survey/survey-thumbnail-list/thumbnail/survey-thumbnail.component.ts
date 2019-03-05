import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../../model/survey';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-thumbnail',
  templateUrl: './survey-thumbnail.component.html',
  styleUrls: [ './survey-thumbnail.component.scss' ]
})
export class SurveyThumbnailComponent implements OnInit {

  @Input() survey: Survey;
  @Input() buttonText;
  @Output() thumbnailClick = new EventEmitter<string>();
  surveyDescription: string;
  takenByUser = false;

  disableBtn = false;

  constructor() {
  }

  ngOnInit() {
    this._styleButton();
    this.surveyDescription = this.survey.description;
  }

  openThumbnail() {
    this.thumbnailClick.emit(this.survey._id);
  }

  private _styleButton() {
    if (this.takenByUser) {
      this.buttonText = 'Taken';
      this.disableBtn = true;
    }
  }
}
