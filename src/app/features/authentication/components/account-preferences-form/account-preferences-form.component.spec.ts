import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPreferencesFormComponent } from './account-preferences-form.component';

describe('AccountPreferencesFormComponent', () => {
  let component: AccountPreferencesFormComponent;
  let fixture: ComponentFixture<AccountPreferencesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPreferencesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPreferencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
