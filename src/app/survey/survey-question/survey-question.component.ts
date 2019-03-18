import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../model/question';

@Component({
  selector: 'survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: [ './survey-question.component.scss' ]
})
export class SurveyQuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[ this.question.key ].valid;
  }

}
