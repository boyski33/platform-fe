import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  @Input() questions: Question[] = [];
  form: FormGroup;
  formValue = '';

  constructor(private _questionService: QuestionControlService) { }

  ngOnInit() {
    this.form = this._questionService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.formValue = JSON.stringify(this.form.value);
  }

}
