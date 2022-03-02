import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenerationFormComponent } from './report-generation-form.component';

describe('ReportGenerationFormComponent', () => {
  let component: ReportGenerationFormComponent;
  let fixture: ComponentFixture<ReportGenerationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGenerationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGenerationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
