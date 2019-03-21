import { Component, Input, OnInit } from '@angular/core';
import { Submission } from '../../survey/model/submission';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'submission-modal',
  templateUrl: './submission-modal.component.html',
  styleUrls: ['./submission-modal.component.scss']
})
export class SubmissionModalComponent implements OnInit {

  @Input() submission: Submission;
  @Input() buttonText: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
