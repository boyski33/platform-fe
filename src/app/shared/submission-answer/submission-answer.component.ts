import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AnsweredQuestion } from '../../survey/model/answered-question';
import { Question } from '../../survey/model/question';

@Component({
  selector: 'submission-answer',
  templateUrl: './submission-answer.component.html',
  styleUrls: ['./submission-answer.component.scss']
})
export class SubmissionAnswerComponent implements OnInit, OnChanges {

  @Input() answeredQuestion: AnsweredQuestion;
  question: Question;
  answer: string;

  constructor() { }

  ngOnInit() {
    this.question = this.answeredQuestion.question;
    this.answer = this.answeredQuestion.answer;

  }

  ngOnChanges() {
  }

}
