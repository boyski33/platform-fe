import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'range-question',
  templateUrl: './range-question.component.html',
  styleUrls: [ './range-question.component.scss' ]
})
export class RangeQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;
  rangeValues = Array.from(Array(10).keys());

  rangeFrom = 1;
  rangeTo = 10;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.options);
    this.updateRangeOptions();
  }

  updateRangeOptions() {
    this.options = this.fb.array([]);
    for (let i = this.rangeFrom; i <= this.rangeTo; i++) {
      this.options.push(this.fb.group({
        key: '',
        value: +i // convert to number, as i is string in the first iteration
      }));
    }
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  set options(array: FormArray) {
    this.questionForm.setControl('options', array);
  }

  get label() {
    return this.questionForm.get('label');
  }
}
