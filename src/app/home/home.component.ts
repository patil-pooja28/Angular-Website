import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serverData: JSON;
  employeeData: JSON;
  keyword;

  constructor(private httpClient: HttpClient) { }
  
  nextPage(key) {
    console.log(key)
    this.httpClient.post('http://127.0.0.1:5000/search',key).subscribe(data => {
      //this.serverData = data as JSON;
      console.log(data);
    })
  }
  

  ngOnInit(): void {
    
  }



}
