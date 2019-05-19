import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionType'
})
export class QuestionTypePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value.toLowerCase()) {
      case 'textbox': {
        return 'Short answer';
      }
      case 'textarea': {
        return 'Long answer';
      }
      case 'yesno': {
        return 'Yes/No';
      }
      default: {
        return value;
      }
    }
  }

}
