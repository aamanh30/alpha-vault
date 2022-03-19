import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConnectPageComponent } from './payment-connect-page.component';

describe('PaymentConnectPageComponent', () => {
  let component: PaymentConnectPageComponent;
  let fixture: ComponentFixture<PaymentConnectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConnectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConnectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
