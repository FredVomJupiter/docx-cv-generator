import { Component, OnInit } from '@angular/core';
import { experiences, education, skills, achievements } from '../../services/data';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public experiences = experiences;
  public education = education;
  public skills = skills;
  public achievements = achievements;

  toggleIndex!: boolean[];
  

  constructor() { }


  ngOnInit(): void {
    this.toggleIndex = experiences.map((experience, index) => false);
    console.log(this.toggleIndex);
  }


  show(index: number) {
    console.log(index);
    if (this.toggleIndex[index] == false) {
      console.log('true');
      this.toggleIndex[index] = true;
    } else {
      this.toggleIndex[index] = false;
    }
  }
}
