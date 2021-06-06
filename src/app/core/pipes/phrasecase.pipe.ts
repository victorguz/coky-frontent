import { Pipe, PipeTransform } from '@angular/core';
import { Helpers } from '../helpers/helpers';

@Pipe({
  name: 'phrasecase'
})
export class PhrasecasePipe implements PipeTransform {

  transform(value: string): unknown {
    return Helpers.toPhraseCase(value);
  }

}
