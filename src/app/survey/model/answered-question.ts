import { Question } from './question';

export class AnsweredQuestion {
  question: Question;
  answer: string; // TODO: consider creating an Answer class

  constructor(question: Question, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}
