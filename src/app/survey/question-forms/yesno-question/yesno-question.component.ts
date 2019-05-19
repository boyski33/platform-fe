import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'yesno-question',
  templateUrl: './yesno-question.component.html',
  styleUrls: [ './yesno-question.component.scss' ]
})
export class YesnoQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addInitialOptions();
  }

  private addInitialOptions() {
    this.options.push(this.fb.group({
      key: '',
      value: 'Yes'
    }));
    this.options.push(this.fb.group({
      key: '',
      value: 'No'
    }));
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  get label() {
    return this.questionForm.get('label');
  }
}
