import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe extends SlicePipe implements PipeTransform {

  transform(value: any, format?: any, length?: number): any {
    let formattedValue;
    const stringValue = typeof value === 'number' ? value.toString() : value;
    const formattedLength = length ? length : 8;
    if (stringValue.length <= formattedLength) {
      return stringValue; // return original value if shorter than truncate length
    }
    const isEven = formattedLength % 2 === 0;
    const formattedLengthHalf = isEven ? formattedLength / 2 : (formattedLength - 1) / 2;
    const firstEight = super.transform(stringValue, 0, formattedLength);
    const lastEight = super.transform(stringValue, -formattedLength);
    const firstFour = super.transform(stringValue, 0, formattedLengthHalf);
    const lastFour = super.transform(stringValue, -formattedLengthHalf);
    const truncatedStart = `...${lastEight.trim()}`;
    const truncatedEnd = `${firstEight.trim()}...`;
    const truncatedMiddle = `${firstFour.trim()}...${lastFour.trim()}`;
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
