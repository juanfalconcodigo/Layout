import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toUser(){
    //is the scroll behavior
    document.getElementById("user").scrollIntoView({behavior:'smooth'})
  }
  toUsit(){
    //is the scroll behavior
    document.getElementById("usit").scrollIntoView({behavior:'smooth'})
  }
  toTest(){
    //is the scroll behavior
    document.getElementById("test").scrollIntoView({behavior:'smooth'})
  }
  toInitialize(){
    //is the scroll behavior
    document.getElementById("initialize").scrollIntoView({behavior:'smooth'})
  }

  toConfifuration(){
    //is the scroll behavior
    document.getElementById("configuration").scrollIntoView({behavior:'smooth'})
  }

}
