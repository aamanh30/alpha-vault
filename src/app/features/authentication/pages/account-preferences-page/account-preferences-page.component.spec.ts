import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPreferencesPageComponent } from './account-preferences-page.component';

describe('AccountPreferencesPageComponent', () => {
  let component: AccountPreferencesPageComponent;
  let fixture: ComponentFixture<AccountPreferencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPreferencesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPreferencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
