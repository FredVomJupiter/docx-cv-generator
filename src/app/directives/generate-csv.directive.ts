import { Directive, HostListener } from '@angular/core';
import { Parser } from '@json2csv/plainjs';

import { experiences, education, skills, achievements } from '../services/data';

@Directive({
  selector: '[appGenerateCSV]'
})
export class GenerateCSVDirective {

  constructor() { }

  @HostListener('click') onClick() {
    this.download();
  }


  public download(): void {
    let myData = [...experiences, ...education, ...skills, ...achievements];
    try {
      const opts = {};
      const parser = new Parser(opts);
      const csv = parser.parse(myData);
      // download the csv file
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'CV.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
    }
  }

}
