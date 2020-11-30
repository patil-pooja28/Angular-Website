import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  serverData: JSON;
  employeeData: JSON;
  keyword;

  constructor(private route: Router) { }

  nextPage(key) {
    const navigationExtras: NavigationExtras = {
      state: {
        keyword: this.keyword
      }
    };
    // console.log(this.keyword);
    this.route.navigate(['/infopage'], navigationExtras)
    
  }


  ngOnInit(): void {
  }

}
