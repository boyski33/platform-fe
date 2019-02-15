import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() {}

  toFormGroup(questions: Question[]) {
    const group = {};

    questions.forEach(q => {
      group[q.key] = new FormControl(q.value || '', Validators.required);
    });

    return new FormGroup(group);
  }
}
