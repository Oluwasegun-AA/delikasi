import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-auth',
  templateUrl: './nav-bar-auth.component.html',
  styleUrls: ['./nav-bar-auth.component.scss']
})
export class NavBarAuthComponent implements OnInit {
  cartWeight: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
