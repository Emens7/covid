import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from '@angular/common'
import { Country } from '../model/country';
import { TimelineItem } from '../model/timeline-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TimelineItem[], keyword: string): TimelineItem[] {
    if(value === null) {
      return [];
    }

    const keyWordLowerCase = keyword.toLocaleLowerCase();


    return value.filter((date: TimelineItem) => {
      const dateLowerCase = formatDate(date.updated_at, 'yyyy.MM.dd.', 'en');

      return dateLowerCase.includes(keyWordLowerCase);
    })
  }

}
