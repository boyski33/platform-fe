import { SurveyQuestion } from './survey-question';

export class DropdownQuestion extends SurveyQuestion {
  controlType = 'dropdown';
  dropdownOptions: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.dropdownOptions = options['dropdownOptions'] || [];
  }
}
