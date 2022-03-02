import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePortfolioPageComponent } from './create-portfolio-page.component';

describe('CreatePortfolioPageComponent', () => {
  let component: CreatePortfolioPageComponent;
  let fixture: ComponentFixture<CreatePortfolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePortfolioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
