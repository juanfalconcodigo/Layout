import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Snotify title!';
  body = 'Lorem ipsum dolor sit amet!';
  timeout = 2000;
  position: SnotifyPosition = SnotifyPosition.rightTop;
  progressBar = true;
  closeClick = true;
  newTop = true;
  filterDuplicates = false;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;
  enable: boolean = true;
  //
  imageObject: Array<object> = [];
  //
  visible: boolean = false;

  constructor(private snotifyService: SnotifyService) { }
  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
        // @ts-ignore
        filterDuplicates: this.filterDuplicates
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }
  ngOnInit(): void {
    this.imageObject = [{
      image: 'https://www.ambientum.com/wp-content/uploads/2019/09/luz-naturaleza.jpg',
      thumbImage: 'https://www.ambientum.com/wp-content/uploads/2019/09/luz-naturaleza.jpg',
      /*  alt: 'alt of image',
       title: 'title of image' */
    }/* , {
      image: 'https://valor.pe/wp-content/uploads/2020/04/naturaleza.jpg', // Support base64 image
      thumbImage: 'https://valor.pe/wp-content/uploads/2020/04/naturaleza.jpg', // Support base64 image
    } */
    ];

  }

  toast() {
    this.snotifyService.success(this.title, this.body, this.getConfig());
  }

  onChange(e) {
    console.log('e', e);
    console.log('ngmodel', this.enable)
    setTimeout(() => {
      this.toast();
    }, 1000)
  }

  meClick() {
    console.log('click')
  }


  showImage() {
    this.visible = true;
  }

  sendVisible(){
    this.visible = false;
  }

}
