import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWalletFormComponent } from './connect-wallet-form.component';

describe('ConnectWalletFormComponent', () => {
  let component: ConnectWalletFormComponent;
  let fixture: ComponentFixture<ConnectWalletFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectWalletFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWalletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
