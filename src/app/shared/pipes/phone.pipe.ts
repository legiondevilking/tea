import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string):string {
    if (!/^[0-9]{12}$/.test(value)) {
      return value;
    }
    const countryCode = value.slice(0);
    const operatorCode = value.slice(1,4);
    const firstPart = value.slice(4, 7);
    const secondPart = value.slice(7, 9);
    const thirdPart = value.slice(9);

    return `+${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
  }

}
