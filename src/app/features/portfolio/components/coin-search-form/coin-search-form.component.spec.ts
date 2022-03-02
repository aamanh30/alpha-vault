import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSearchFormComponent } from './coin-search-form.component';

describe('CoinSearchFormComponent', () => {
  let component: CoinSearchFormComponent;
  let fixture: ComponentFixture<CoinSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
