import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCardFormComponent } from './connect-card-form.component';

describe('ConnectCardFormComponent', () => {
  let component: ConnectCardFormComponent;
  let fixture: ComponentFixture<ConnectCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
