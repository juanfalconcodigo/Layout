import { Component, OnInit } from '@angular/core';
import { CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  data: CloudData[] = [
    { text: 'weight-5', weight: 5 },
    { text: 'weight-7', weight: 7 },
    { text: 'weight-9', weight: 9 }
    // ...
  ];
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
