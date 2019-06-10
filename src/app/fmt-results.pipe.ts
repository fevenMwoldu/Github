import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fmtResults'
})
export class FmtResultsPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value > 0 ? value : 'No reults found, please try again.';
  }
}
