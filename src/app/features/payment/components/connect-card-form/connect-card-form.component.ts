import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

const MAT_CUSTOM_MONTH_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY'
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'alpha-vault-connect-card-form',
  templateUrl: './connect-card-form.component.html',
  styleUrls: ['./connect-card-form.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_CUSTOM_MONTH_FORMATS }]
})
export class ConnectCardFormComponent {
  @Input() form = new FormGroup({});
  @Input() submitted = false;
  @Output() dateEmitter = new EventEmitter();

  constructor() {}
  onExpDateSelected(date: any, datepicker: MatDatepicker<any>) {
    datepicker.close();
    const expDate = new Date(date);
    // this.dateEmitter.emit({
    //   date: expDate.getDate(),
    //   year: expDate.getFullYear(),
    //   month: expDate.getMonth() + 1
    // });
    this.dateEmitter.emit(date);
  }
}
