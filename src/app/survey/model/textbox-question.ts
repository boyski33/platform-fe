import { SurveyQuestion } from './survey-question';

export class TextboxQuestion extends SurveyQuestion {
  controlType = 'textbox';

  constructor(options: any = {}) {
    super(options);
  }
}
