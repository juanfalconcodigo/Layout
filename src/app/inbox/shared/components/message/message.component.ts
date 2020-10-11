import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input('content') content: any[];
  @Input('totalPages') totalPages: number;
  @Input('totalElements') totalElements: number;
  @Input('number') number: number;
  @Output('feedSelect') feedSelect: EventEmitter<number>;
  @Output('newPage') newPage: EventEmitter<number>;


  constructor() {
    this.feedSelect = new EventEmitter();
    this.newPage = new EventEmitter();
  }

  ngOnInit(): void {

    console.log(this.content);
  }

  messageSelected(id: number) {
    this.feedSelect.emit(id);
  }

  nextPage() {
    this.newPage.emit(this.number + 1);
  }

  lastPage() {
    this.newPage.emit(this.number - 1);
  }

}
