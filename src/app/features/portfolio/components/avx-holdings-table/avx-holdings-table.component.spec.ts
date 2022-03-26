import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvxHoldingsTableComponent } from './avx-holdings-table.component';

describe('AvxHoldingsTableComponent', () => {
  let component: AvxHoldingsTableComponent;
  let fixture: ComponentFixture<AvxHoldingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvxHoldingsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvxHoldingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
