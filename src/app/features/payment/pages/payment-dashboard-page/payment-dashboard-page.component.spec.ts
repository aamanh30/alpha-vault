import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDashboardPageComponent } from './payment-dashboard-page.component';

describe('PaymentDashboardPageComponent', () => {
  let component: PaymentDashboardPageComponent;
  let fixture: ComponentFixture<PaymentDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
