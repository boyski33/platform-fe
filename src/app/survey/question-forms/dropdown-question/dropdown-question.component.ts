import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.scss']
})
export class DropdownQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;
  @Output() removeClick = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addOption();
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
