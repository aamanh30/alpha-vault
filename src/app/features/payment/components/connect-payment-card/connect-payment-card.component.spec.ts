import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectPaymentCardComponent } from './connect-payment-card.component';

describe('ConnectPaymentCardComponent', () => {
  let component: ConnectPaymentCardComponent;
  let fixture: ComponentFixture<ConnectPaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectPaymentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
