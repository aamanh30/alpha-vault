import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWalletPageComponent } from './connect-wallet-page.component';

describe('ConnectWalletPageComponent', () => {
  let component: ConnectWalletPageComponent;
  let fixture: ComponentFixture<ConnectWalletPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectWalletPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWalletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
