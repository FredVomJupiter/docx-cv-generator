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
  public sum: Object[] = [];

  toggleIndex!: boolean[];


  constructor() { }


  ngOnInit(): void {
    this.toggleIndex = experiences.map(() => false);
    this.toggleIndex.push(...education.map(() => false));
    this.toggleIndex.push(...skills.map(() => false));
    this.toggleIndex.push(...achievements.map(() => false));
    this.sum.push(...experiences);
    this.sum.push(...education);
    this.sum.push(...skills);
    this.sum.push(...achievements);
  }


  show(index: number) {
    this.toggleIndex.forEach(() => false);
    if (this.toggleIndex[index] == false) {
      this.toggleIndex[index] = true;
    } else {
      this.toggleIndex[index] = false;
    }
  }
}
