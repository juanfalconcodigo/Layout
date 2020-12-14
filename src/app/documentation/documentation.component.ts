import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { fromEvent, Subscription } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit, AfterViewInit, OnDestroy {
  data: CloudData[] = [
    { text: 'weight-5', weight: 5 },
    { text: 'weight-7', weight: 7 },
    { text: 'weight-9', weight: 9 }
    // ...
  ];
  //ndv3
  options;
  dataNdv3;
  d3: any;
  @ViewChild("initialize", { static: false }) initialize: ElementRef;
  subscriptionScroll: Subscription = null;
  constructor() { }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("Hello ", this.initialize.nativeElement);

  }



  ngOnInit(): void {
    const element: any = document.getElementsByClassName('delete boder');
    console.log(element);
    if (element[element.length - 1]) {
      element[element.length - 1].style.display = 'none';
    }
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.dataNdv3 = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "A",
            "value": -29.765957771107
          },
          {
            "label": "B",
            "value": 0
          },
          {
            "label": "C",
            "value": 32.807804682612
          },
          {
            "label": "D",
            "value": 196.45946739256
          },
          {
            "label": "E",
            "value": 0.19434030906893
          },
          {
            "label": "F",
            "value": -98.079782601442
          },
          {
            "label": "G",
            "value": -13.925743130903
          },
          {
            "label": "H",
            "value": -5.1387322875705
          }
        ]
      }
    ];
    //scroll
    this.subscriptionScroll = fromEvent(document, 'scroll').pipe(
     pluck('target','documentElement','scrollTop')
    ).subscribe(
      (x) => {
        console.log('Next: Clicked!', x);
        if(x>='430'&&x<760){
          document.getElementById("initialize-fix").classList.add("mystyle");
          document.getElementById("configuration-fix").classList.remove("mystyle");
        }
        if(x>='760'&&x<1080){
          document.getElementById("configuration-fix").classList.add("mystyle");
          document.getElementById("initialize-fix").classList.remove("mystyle");
        }
      },
      (err) => {
        console.log('Error: %s', err);
      },
      () => {
        console.log('Completed');
      });
  }

  ngOnDestroy(): void {
    this.subscriptionScroll && this.subscriptionScroll.unsubscribe();
  }

  toUser() {
    //is the scroll behavior
    document.getElementById("user").scrollIntoView({ behavior: 'smooth' })
  }
  toUsit() {
    //is the scroll behavior
    document.getElementById("usit").scrollIntoView({ behavior: 'smooth' })
  }
  toTest() {
    //is the scroll behavior
    document.getElementById("test").scrollIntoView({ behavior: 'smooth' })
  }
  toInitialize() {
    //is the scroll behavior
    this.initialize.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

  toConfifuration() {
    //is the scroll behavior
    document.getElementById("configuration").scrollIntoView({ behavior: 'smooth' })
  }

}
