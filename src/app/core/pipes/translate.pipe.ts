import { Pipe, PipeTransform } from '@angular/core';
import { CokyLangCategory } from '../langs/lang.model';
import { translate } from '../langs/lang.phrases';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, category: string): unknown {
    let cat: CokyLangCategory = category ? CokyLangCategory[category] : CokyLangCategory.GENERAL;

    if (cat && typeof value == "string") {
      return translate(value, cat);
    }
    return value;
  }

}
