import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingAlgorithmSectionComponent } from './trading-algorithm-section.component';

describe('TradingAlgorithmSectionComponent', () => {
  let component: TradingAlgorithmSectionComponent;
  let fixture: ComponentFixture<TradingAlgorithmSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingAlgorithmSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingAlgorithmSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
