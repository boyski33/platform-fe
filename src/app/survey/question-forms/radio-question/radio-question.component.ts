import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.scss']
})
export class RadioQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addOption() {
    this.options.push(this.fb.group({
      key: '',
      value: ''
    }));
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }
}
