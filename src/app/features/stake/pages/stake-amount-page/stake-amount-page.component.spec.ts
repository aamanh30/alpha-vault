import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeAmountPageComponent } from './stake-amount-page.component';

describe('StakeAmountPageComponent', () => {
  let component: StakeAmountPageComponent;
  let fixture: ComponentFixture<StakeAmountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeAmountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeAmountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
