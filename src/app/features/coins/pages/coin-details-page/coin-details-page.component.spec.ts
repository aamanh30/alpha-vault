import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailsPageComponent } from './coin-details-page.component';

describe('CoinDetailsPageComponent', () => {
  let component: CoinDetailsPageComponent;
  let fixture: ComponentFixture<CoinDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
