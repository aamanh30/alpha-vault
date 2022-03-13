import { AbstractControl, ValidatorFn } from '@angular/forms';

export const totalValueValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const totalHoldings = control.value.reduce(
      (total: number, current: any) => (total += Number(current.percentage)),
      0
    );

    return totalHoldings === 100
      ? null
      : {
          custom: `Coin holdings is ${totalHoldings}% should be 100%`
        };
  };
};
