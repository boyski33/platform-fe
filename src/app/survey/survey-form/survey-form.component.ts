import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  @Input() questions: Question[];
  form: FormGroup;
  formValue = '';

  constructor(private _questionControlService: QuestionControlService,
              private _questionService: QuestionService) { }

  ngOnInit() {
    this.form = this._questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.formValue = JSON.stringify(this.form.value);
  }

}
