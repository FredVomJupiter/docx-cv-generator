import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorComponent } from './generator.component';

describe('GeneratorComponent', () => {
  let component: GeneratorComponent;
  let fixture: ComponentFixture<GeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorComponent]
    });
    fixture = TestBed.createComponent(GeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button', () => {
    const fixture = TestBed.createComponent(GeneratorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Generate');
  });

  it('should post alert when clicking button', () => {
    const fixture = TestBed.createComponent(GeneratorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    spyOn(window, 'alert');
    compiled.querySelector('button')?.click();
    expect(window.alert).toHaveBeenCalledWith('generate');
  });
});
