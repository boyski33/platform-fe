import { Question } from './question';

export class DropdownQuestion extends Question {
  controlType = 'dropdown';
  dropdownOptions: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.dropdownOptions = options['dropdownOptions'] || [];
  }
}
