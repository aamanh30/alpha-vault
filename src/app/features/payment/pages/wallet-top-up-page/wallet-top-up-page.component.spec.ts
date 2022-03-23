import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTopUpPageComponent } from './wallet-top-up-page.component';

describe('WalletTopUpPageComponent', () => {
  let component: WalletTopUpPageComponent;
  let fixture: ComponentFixture<WalletTopUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletTopUpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTopUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
