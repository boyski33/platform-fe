import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox-question',
  templateUrl: './textbox-question.component.html',
  styleUrls: ['./textbox-question.component.scss']
})
export class TextboxQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
