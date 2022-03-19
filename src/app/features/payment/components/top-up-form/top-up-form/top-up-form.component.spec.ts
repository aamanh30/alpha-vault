import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpFormComponent } from './top-up-form.component';

describe('TopUpFormComponent', () => {
  let component: TopUpFormComponent;
  let fixture: ComponentFixture<TopUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
