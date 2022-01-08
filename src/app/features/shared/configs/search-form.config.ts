import { Validators } from '@angular/forms';

export const searchFormConfig = {
  text: ['', [Validators.minLength(3)]]
};
