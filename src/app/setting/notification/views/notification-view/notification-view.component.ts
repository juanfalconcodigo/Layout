import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.scss']
})
export class NotificationViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.parent.params.subscribe((params: Params) => {
      console.log('params', params);
    });

   /*  console.log(
      this.route.parent.parent.snapshot.params.portalName,
      this.route.parent.parent.snapshot.params.portalId
    ) */
  }

}
