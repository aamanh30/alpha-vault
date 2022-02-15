import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portfolioFilter'
})
export class PortfolioFilterPipe implements PipeTransform {
  transform(list: any[], ...args: unknown[]): any[] {
    if (!list || !list.length) {
      return [];
    }
    const [filter]: any[] = args;
    if (!filter || !filter.id) {
      return list;
    }

    return list.filter(
      item =>
        item.categories &&
        item.categories.some((category: any) => category === filter.id)
    );
  }
}
