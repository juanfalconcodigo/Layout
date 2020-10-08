import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  @Input('feedBackResponse') feedBackResponse:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
