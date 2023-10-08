import { TestBed } from '@angular/core/testing';
import { GenerateDirective } from './generate.directive';

describe('GenerateDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateDirective]
    });
  });

  it('should create an instance', () => {
    const directive = new GenerateDirective();
    expect(directive).toBeTruthy();
  });

  it('should call download method', () => {
    const directive = new GenerateDirective();
    spyOn(directive, 'download');
    directive.onClick();
    expect(directive.download).toHaveBeenCalled();
  });

});



