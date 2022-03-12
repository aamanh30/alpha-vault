import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAdditionalDetailsComponent } from './portfolio-additional-details.component';

describe('PortfolioAdditionalDetailsComponent', () => {
  let component: PortfolioAdditionalDetailsComponent;
  let fixture: ComponentFixture<PortfolioAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAdditionalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
