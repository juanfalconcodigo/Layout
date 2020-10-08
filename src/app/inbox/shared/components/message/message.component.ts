import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.messages=[
      {
        userComment:'testing1'
      },
      {
        userComment:'testing2'
      },
      {
        userComment:'testing3'
      },
      {
        userComment:'testing4'
      },
      {
        userComment:'testing5'
      }
    ]
  }

}
