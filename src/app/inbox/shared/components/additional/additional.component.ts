import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
  @Input('feedBackResponse') feedBackResponse:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
