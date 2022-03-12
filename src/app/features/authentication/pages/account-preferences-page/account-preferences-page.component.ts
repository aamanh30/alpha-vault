import { FormGroup } from '@angular/forms';
import { AuthFormService } from './../../services/auth-form/auth-form.service';
import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../../../core/base';

@Component({
  selector: 'alpha-vault-account-preferences-page',
  templateUrl: './account-preferences-page.component.html',
  styleUrls: ['./account-preferences-page.component.scss']
})
export class AccountPreferencesPageComponent
  extends PageBase
  implements OnInit
{
  form: FormGroup = new FormGroup({});

  constructor(private authFormService: AuthFormService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.submitted = false;
    this.form = this.authFormService.getAccountPreferencesForm();
  }
}
