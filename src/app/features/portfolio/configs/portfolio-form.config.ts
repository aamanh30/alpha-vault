import { AbstractControl, ValidatorFn } from '@angular/forms';

export const totalValueValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log(`Value: `, control.value);
    console.log(`Control: `, control);
    return null;
  };
};
