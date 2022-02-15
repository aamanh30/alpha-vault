import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNameSectionComponent } from './portfolio-name-section.component';

describe('PortfolioNameSectionComponent', () => {
  let component: PortfolioNameSectionComponent;
  let fixture: ComponentFixture<PortfolioNameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioNameSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
