import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsPageComponent } from './portfolio-details-page.component';

describe('PortfolioDetailsPageComponent', () => {
  let component: PortfolioDetailsPageComponent;
  let fixture: ComponentFixture<PortfolioDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
