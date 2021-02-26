import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
search="HBS";
event:string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.search);

  }
  onclick(e){
    this.search=e.value;
  }
}
