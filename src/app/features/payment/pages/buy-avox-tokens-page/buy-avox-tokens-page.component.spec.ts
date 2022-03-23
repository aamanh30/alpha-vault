import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAvoxTokensPageComponent } from './buy-avox-tokens-page.component';

describe('BuyAvoxTokensPageComponent', () => {
  let component: BuyAvoxTokensPageComponent;
  let fixture: ComponentFixture<BuyAvoxTokensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAvoxTokensPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAvoxTokensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
