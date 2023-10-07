import { Directive, Host, HostListener } from '@angular/core';
import { DocumentCreator } from '../services/generator';
import { achievements, education, experiences, skills } from '../services/data';
import { Packer } from "docx";
import { saveAs } from "file-saver";


@Directive({
  selector: '[appGenerate]'
})
export class GenerateDirective {


  @HostListener('click') onClick() {
    this.download();
  }

  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "CV.docx");
      console.log("Document created successfully");
    });
  }
}
