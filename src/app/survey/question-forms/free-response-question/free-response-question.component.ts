import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'free-response-question',
  templateUrl: './free-response-question.component.html',
  styleUrls: ['./free-response-question.component.scss']
})
export class FreeResponseQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  get label() {
    return this.questionForm.get('label');
  }

}
