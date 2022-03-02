import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alpha-vault-report-generation-form',
  templateUrl: './report-generation-form.component.html',
  styleUrls: ['./report-generation-form.component.scss']
})
export class ReportGenerationFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  constructor() {}
}
