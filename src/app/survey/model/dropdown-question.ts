import { Question } from './question';

export class DropdownQuestion extends Question {
  controlType = 'dropdown';
  options: string[];

  constructor(options: any = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
