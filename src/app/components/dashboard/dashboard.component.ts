import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  toggleMenu: boolean = false;

  constructor(private router: Router) { } 


  openMenu() {
    if (!this.toggleMenu) {
      this.toggleMenu = true;
      this.router.navigate(['dashboard/generator']);
    } else {
      this.toggleMenu = false;
      this.router.navigate(['dashboard']);
    }
    
  }

}
