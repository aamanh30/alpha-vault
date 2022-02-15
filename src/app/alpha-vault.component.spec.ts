import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlphaVaultComponent } from './alpha-vault.component';

describe('AlphaVaultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlphaVaultComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlphaVaultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'alpha-vault'`, () => {
    const fixture = TestBed.createComponent(AlphaVaultComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('alpha-vault');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AlphaVaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('alpha-vault app is running!');
  });
});
