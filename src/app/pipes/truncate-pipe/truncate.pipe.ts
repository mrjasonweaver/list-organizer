import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe extends SlicePipe implements PipeTransform {

  transform(value: any, format?: any, length?: any): any {
    let formattedValue;
    const formattedLength = length ? length : 8;
    if (value.length <= formattedLength) return value;
    const isEven = formattedLength % 2 == 0;
    const formattedLengthHalf = isEven ? formattedLength / 2 : (formattedLength - 1) / 2;
    const firstEight = super.transform(value, 0, formattedLength);
    const lastEight = super.transform(value, -formattedLength);
    const firstFour = super.transform(value, 0, formattedLengthHalf);
    const lastFour = super.transform(value, -formattedLengthHalf);
    const truncatedStart = `...${lastEight}`;
    const truncatedEnd = `${firstEight}...`;
    const truncatedMiddle = `${firstFour}...${lastFour}`;
    switch (format) {
      case 'start':
        formattedValue = truncatedStart;
        break;
      case 'middle':
        formattedValue = truncatedMiddle;
        break;
      case 'end':
        formattedValue = truncatedEnd;
        break;
      default:
        formattedValue = truncatedStart;
    }
    return formattedValue;
  }

}
