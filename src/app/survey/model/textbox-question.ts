import { Question } from './question';

export class TextboxQuestion extends Question {
  controlType = 'textbox';

  constructor(options: any = {}) {
    super(options);
  }
}
