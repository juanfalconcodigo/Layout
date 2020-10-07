import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {
  dataFake: any = null;
  constructor() { }

  ngOnInit(): void {
    this.dataFake = {
      portals: [
        {
          name: 'FEEDBACK',
          id: 1
        },
        {
          name: 'EUROPA_WEB',
          id: 23
        }
      ],
      roles: [
        "FEEDBACK_ADMIN",
        "EUROPA_WEB_USER"
      ],
      enterpriseId: '1236813',
      username: 'Cesar',
      offshore: 'Y'
    }
  }

}
