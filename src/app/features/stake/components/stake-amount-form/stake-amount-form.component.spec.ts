import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeAmountFormComponent } from './stake-amount-form.component';

describe('StakeAmountFormComponent', () => {
  let component: StakeAmountFormComponent;
  let fixture: ComponentFixture<StakeAmountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeAmountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeAmountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
