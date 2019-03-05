import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../../survey/model/survey';

@Component({
  selector: 'survey-thumbnail-list',
  templateUrl: './survey-thumbnail-list.component.html',
  styleUrls: [ './survey-thumbnail-list.component.scss' ]
})
export class SurveyThumbnailListComponent implements OnInit {

  @Input() surveys: Survey[];
  @Input() buttonText: string;
  @Output() thumbnailClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  openSurvey(id: string) {
    this.thumbnailClick.emit(id);
  }

}
