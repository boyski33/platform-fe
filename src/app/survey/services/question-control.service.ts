import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() {
  }

  toFormGroup(questions: Question[]) {
    // TODO: add custom validations, such as not empty
    const group = {};

    questions.forEach(q => {
      group[q.key] = new FormControl(q.value || '', Validators.required);
    });

    return new FormGroup(group);
  }
}
