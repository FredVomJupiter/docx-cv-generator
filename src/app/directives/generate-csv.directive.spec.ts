import { TestBed } from '@angular/core/testing';
import { GenerateCSVDirective } from './generate-csv.directive';

describe('GenerateCSVDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [ GenerateCSVDirective ]
    });
  });

  it('should create an instance', () => {
    const directive = new GenerateCSVDirective();
    expect(directive).toBeTruthy();
  });


  it('should call download', () => {
    const directive = new GenerateCSVDirective();
    spyOn(directive, 'download');
    directive.onClick();
    expect(directive.download).toHaveBeenCalled();
  });
});
