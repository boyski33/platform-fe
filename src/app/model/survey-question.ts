export class SurveyQuestion {
  value: string;
  key: string;
  label: string;
  order: number;
  controlType: string;

  constructor(options: {
    value?: string,
    key?: string,
    label?: string,
    order?: number,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }

}
