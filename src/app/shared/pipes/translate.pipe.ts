import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePipe'
})
export class TranslatePipe implements PipeTransform {

  persianValue;

  transform(value: string): string {

    switch (value) {
      case 'active':
        this.persianValue = 'فعال';
        break;

      case 'deActive':
        this.persianValue = 'غیر فعال';
        break;

      default:
        this.persianValue = 'تغریف تشده';
        break;
    }
    return this.persianValue;
  }

}
