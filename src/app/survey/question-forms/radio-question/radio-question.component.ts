import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.scss']
})
export class RadioQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;
  @Output() removeClick = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addOption() {
    this.options.push(this.fb.group({
      key: '',
      value: ''
    }));
  }

  remove() {
    this.removeClick.emit();
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }
}
