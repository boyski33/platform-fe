import { Question } from './question';
import { QuestionType } from './question-type';

export class DropdownQuestion extends Question {
  controlType = QuestionType.DROPDOWN;
  dropdownOptions: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.dropdownOptions = options['dropdownOptions'] || [];
  }
}
