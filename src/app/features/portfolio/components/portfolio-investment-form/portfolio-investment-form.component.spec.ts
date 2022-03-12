import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInvestmentFormComponent } from './portfolio-investment-form.component';

describe('PortfolioInvestmentFormComponent', () => {
  let component: PortfolioInvestmentFormComponent;
  let fixture: ComponentFixture<PortfolioInvestmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioInvestmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioInvestmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
