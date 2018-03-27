import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe extends SlicePipe implements PipeTransform {

  transform(value: any, format?: any): any {
    let formattedValue;
    const firstEight = super.transform(value, 0, 8);
    const lastEight = super.transform(value, -8);
    const firstFour = super.transform(value, 0, 4);
    const lastFour = super.transform(value, -4);
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
