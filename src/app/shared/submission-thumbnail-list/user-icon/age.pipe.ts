import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dob = new Date(value);
    // todo install moment.js
    console.log(new Date(new Date().getTime() - dob.getTime()).getFullYear());
  }

}
