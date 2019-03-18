import { QuestionOption } from './question-option';

export class Question {
  key: string;
  value: string;
  label: string;
  order: number;
  controlType: string;
  placeholder?: string;
  options?: QuestionOption[];

  // constructor(options: {
  //   key?: string,
  //   value?: string,
  //   label?: string,
  //   order?: number,
  //   controlType?: string
  //   placeholder?: string;
  // } = {}) {
  //   this.key = options.key || '';
  //   this.value = options.value;
  //   this.label = options.label || '';
  //   this.order = options.order === undefined ? 1 : options.order;
  //   this.controlType = options.controlType || '';
  //   this.placeholder = options.placeholder || '';
  // }

}
