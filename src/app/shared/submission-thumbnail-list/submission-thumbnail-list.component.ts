import { Component, Input, OnInit } from '@angular/core';
import { Submission } from '../../survey/model/submission';

@Component({
  selector: 'submission-thumbnail-list',
  templateUrl: './submission-thumbnail-list.component.html',
  styleUrls: [ './submission-thumbnail-list.component.scss' ]
})
export class SubmissionThumbnailListComponent implements OnInit {

  @Input() submissions: Submission[];
  @Input() buttonText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
