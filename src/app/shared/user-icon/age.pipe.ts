import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

function getFullYearsBetween(now: Moment, dob: Moment): number {
  return now.diff(dob, 'years');
}

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): number {
    const now = moment();
    const dob = moment(value);

    return getFullYearsBetween(now, dob);
  }

}
