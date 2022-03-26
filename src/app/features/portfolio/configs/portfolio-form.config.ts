import { AbstractControl, ValidatorFn } from '@angular/forms';

export const totalValueValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNegative = control.value.some(
      ({ percentage }: any) => percentage <= 0
    );
    if (isNegative) {
      return {
        custom: `Coin holdings cannot be less than or equal to 0`
      };
    }
    const totalHoldings = control.value.reduce(
      (total: number, current: any) => (total += Number(current.percentage)),
      0
    );

    if (isNaN(totalHoldings)) {
      return {
        custom: `Coin holdings cannot be blank`
      };
    }

    return totalHoldings === 100
      ? null
      : {
          custom: `Coin holdings is ${totalHoldings}% should be 100%`
        };
  };
};
