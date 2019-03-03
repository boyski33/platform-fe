import { Question } from './question';

export class DropdownQuestion extends Question {
  controlType = 'dropdown';
  dropdownOptions: string[];

  constructor(options: any = {}) {
    super(options);
    this.dropdownOptions = options['dropdownOptions'] || [];
  }
}
