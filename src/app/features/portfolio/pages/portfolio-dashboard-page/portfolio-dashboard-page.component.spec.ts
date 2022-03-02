import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDashboardPageComponent } from './portfolio-dashboard-page.component';

describe('PortfolioDashboardPageComponent', () => {
  let component: PortfolioDashboardPageComponent;
  let fixture: ComponentFixture<PortfolioDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
