import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter'
})
export class CapitalLetterPipe implements PipeTransform {

  transform(value: string): string {
    let s = value.charAt(0).toUpperCase();
    let string = value.slice(1);
    return s.concat(string);
  }

}
