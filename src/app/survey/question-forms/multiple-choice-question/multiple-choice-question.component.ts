import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: [ './multiple-choice-question.component.scss' ]
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;
  btnDisable = true;
  addIcon = faPlus;
  removeIcon = faTimes;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addOption();
  }

  addOption() {
    this.options.push(this.fb.group({
      key: '',
      value: ''
    }));

    if (this.options.controls.length > 1) {
      this.btnDisable = false;
    }
  }

  removeOption(index) {
    this.options.controls.splice(index, 1);

    if (this.options.controls.length === 1) {
      this.btnDisable = true;
    }
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }
}
