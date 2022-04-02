import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeDashboardPageComponent } from './stake-dashboard-page.component';

describe('StakeDashboardPageComponent', () => {
  let component: StakeDashboardPageComponent;
  let fixture: ComponentFixture<StakeDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
