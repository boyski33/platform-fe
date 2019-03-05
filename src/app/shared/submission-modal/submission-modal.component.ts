import { Component, Input, OnInit } from '@angular/core';
import { Submission } from '../../survey/model/submission';

@Component({
  selector: 'submission-modal',
  templateUrl: './submission-modal.component.html',
  styleUrls: ['./submission-modal.component.scss']
})
export class SubmissionModalComponent implements OnInit {

  @Input() submission: Submission;

  constructor() { }

  ngOnInit() {
  }

}
