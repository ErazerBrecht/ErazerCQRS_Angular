import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  comment: string =  "# Test Comment";
  
  constructor() { }

  ngOnInit() {
  }

}
