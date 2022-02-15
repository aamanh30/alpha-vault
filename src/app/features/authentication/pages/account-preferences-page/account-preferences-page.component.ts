import { FormGroup } from '@angular/forms';
import { AuthFormService } from './../../services/auth-form/auth-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-vault-account-preferences-page',
  templateUrl: './account-preferences-page.component.html',
  styleUrls: ['./account-preferences-page.component.scss']
})
export class AccountPreferencesPageComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(private authFormService: AuthFormService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.submitted = false;
    this.form = this.authFormService.getAccountPreferencesForm();
  }
}
