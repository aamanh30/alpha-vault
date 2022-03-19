import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWallet'
})
export class FilterWalletPipe implements PipeTransform {
  transform(value: any[] | null, ...args: unknown[]): any[] {
    const [term] = args;
    if (!value || (value && !value.length)) {
      return [];
    }

    if (!term || !(term as string).length) {
      return value;
    }

    return value.filter(({ label }) =>
      label.match(new RegExp(term as string, 'ig'))
    );
  }
}
