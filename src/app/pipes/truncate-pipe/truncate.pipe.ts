import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe extends SlicePipe implements PipeTransform {

  transform(value: any, format?: any): any {
    let formatteValue;
    const firstEight = super.transform(value, 0:8);
    const lastEight = super.transform(value, -8);
    const firstFour = super.transform(value, 0:4);
    const lastFour = super.transform(value, -4);
    const truncatedStart = `${firstEight}...`
    const truncatedEnd = `...${lastEight}`;
    const truncatedMiddle = `${firstFour}...${lastFour}`;
    switch (format) {
      case 'start':
        formatteValue = truncatedStart;
        break;
      case 'middle':
        formatteValue = truncatedMiddle;
        break;
      case 'end':
        formatteValue = truncatedEnd;
        break;
      default:
        formatteValue = truncatedStart;
    }
    return formatteValue;
  }

}
