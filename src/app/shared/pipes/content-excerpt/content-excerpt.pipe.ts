import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentExcerpt'
})
export class ContentExcerptPipe implements PipeTransform {
  transform(value: string, count: number = 30): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    if (words.length <= count) {
      return value;
    }

    return `${words.slice(0, count).join(' ')}...`;
  }
}
