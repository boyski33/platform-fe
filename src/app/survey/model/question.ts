import { QuestionType } from './question-type';

export class Question {
  value: string;
  key: string;
  label: string;
  order: number;
  controlType: QuestionType;

  constructor(options: {
    value?: string,
    key?: string,
    label?: string,
    order?: number,
    controlType?: QuestionType
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || QuestionType.NONE;
  }

}
