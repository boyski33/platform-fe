import { Question } from './question';
import { QuestionType } from './question-type';

export class TextboxQuestion extends Question {
  controlType = QuestionType.TEXTBOX;

  constructor(options: any = {}) {
    super(options);
  }
}
