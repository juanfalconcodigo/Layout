import { Component, OnInit } from '@angular/core';

/**
 *Component Header Root 
**/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit(): void {
    this.username = 'Cesar'
  }

}
