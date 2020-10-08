import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
 @Input('content') content:any[];
 @Input('totalPages') totalPages:number;
 @Input('totalElements') totalElements:number;
 @Output('feedSelect') feedSelect:EventEmitter<number>; 

  constructor() {
    this.feedSelect=new EventEmitter();
   }

  ngOnInit(): void {
   
    console.log(this.content)
  }

  messageSelected(id:number){
    this.feedSelect.emit(id);
  }

  

}
