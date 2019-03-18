import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.scss']
})
export class DropdownQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addOption() {
    this.options.push(this.fb.group({
      key: '',
      value: ''
    }));

    console.log(this.questionForm.getRawValue());
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }
}
