import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox-question',
  templateUrl: './textbox-question.component.html',
  styleUrls: ['./textbox-question.component.scss']
})
export class TextboxQuestionComponent implements OnInit {

  @Input() questionForm: FormGroup;

  @Output() removeClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.removeClick.emit();
  }

}
