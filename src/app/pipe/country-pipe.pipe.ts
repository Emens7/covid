import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../model/country';

@Pipe({
  name: 'countryPipe'
})
export class CountryPipePipe implements PipeTransform {

  transform(value: Country[], keyword: string): Country[] {
    if(value === null) {
      return [];
    }
    const keyWordLowerCase = keyword.toLocaleLowerCase();


    return value.filter((country: Country) => {
      const countryLowerCase = country.name.toLocaleLowerCase();

      return countryLowerCase.includes(keyWordLowerCase);
    })
  }


}
