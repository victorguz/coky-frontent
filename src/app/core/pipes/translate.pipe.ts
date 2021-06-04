import { Pipe, PipeTransform } from '@angular/core';
import { CokyLangCategory, __ } from '../langs';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, category: string): unknown {
    let cat: CokyLangCategory = category ? CokyLangCategory[category] : CokyLangCategory.GENERAL;

    if (cat && typeof value == "string") {
      return __(value, cat);
    }
    return value;
  }

}
