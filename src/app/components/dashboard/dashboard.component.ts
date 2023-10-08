import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  toggleData: boolean = false;
  toggleCredits: boolean = false;

  constructor(private router: Router) { } 


  openData() {
    if (!this.toggleData) {
      this.toggleData = true;
    } else {
      this.toggleData = false;
    }
  }


  openCredits() {
    if (!this.toggleCredits) {
      this.toggleCredits = true;
    } else {
      this.toggleCredits = false;
    }
  }

}
