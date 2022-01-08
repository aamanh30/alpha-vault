import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { searchFormConfig } from '../../configs';

@Component({
  selector: 'alpha-vault-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form: FormGroup = <FormGroup>{};
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(searchFormConfig);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(`Form Value: `, this.form.value);
  }
}
