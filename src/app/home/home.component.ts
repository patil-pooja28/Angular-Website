import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
