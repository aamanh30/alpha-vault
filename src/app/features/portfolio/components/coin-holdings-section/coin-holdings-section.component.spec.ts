import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinHoldingsSectionComponent } from './coin-holdings-section.component';

describe('CoinHoldingsSectionComponent', () => {
  let component: CoinHoldingsSectionComponent;
  let fixture: ComponentFixture<CoinHoldingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinHoldingsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinHoldingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
