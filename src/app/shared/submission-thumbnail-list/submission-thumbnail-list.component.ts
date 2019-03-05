import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '../../survey/model/submission';
import { SurveyService } from '../../survey/services/survey.service';

@Component({
  selector: 'submission-thumbnail-list',
  templateUrl: './submission-thumbnail-list.component.html',
  styleUrls: [ './submission-thumbnail-list.component.scss' ]
})
export class SubmissionThumbnailListComponent implements OnInit {

  @Input() submissions: Submission[];
  @Input() buttonText: string;
  @Output() thumbnailClick = new EventEmitter<Submission>();

  constructor() {
  }

  ngOnInit() {
  }

  openSubmission(submission: Submission) {
    this.thumbnailClick.emit(submission);
  }

}
