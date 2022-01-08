import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultInfoComponent } from './vault-info.component';

describe('VaultInfoComponent', () => {
  let component: VaultInfoComponent;
  let fixture: ComponentFixture<VaultInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
