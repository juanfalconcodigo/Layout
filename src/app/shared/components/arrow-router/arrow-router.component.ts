import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-router',
  templateUrl: './arrow-router.component.html',
  styleUrls: ['./arrow-router.component.scss']
})
export class ArrowRouterComponent implements OnInit {
  @Input('routerCustom') routerCustom:any;

  constructor() { }

  ngOnInit(): void {
  }

}
