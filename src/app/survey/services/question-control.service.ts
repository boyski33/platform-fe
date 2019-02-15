import { Injectable } from '@angular/core';
import { SurveyQuestion } from '../model/survey-question';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() {}

  toFormGroup(questions: SurveyQuestion[]) {
    const group = {};

    questions.forEach(q => {
      group[q.key] = new FormControl(q.value || '', Validators.required);
    });

    return new FormGroup(group);
  }
}
