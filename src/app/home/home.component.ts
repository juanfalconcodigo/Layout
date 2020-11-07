import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  //fake array
  users: any[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },];
  closeResult = '';
  user: any = null;

  forma:FormGroup=null;

  constructor(private snotifyService: SnotifyService, private modalService: NgbModal) { }
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

    this.forma=new FormGroup({
      'dni':new FormControl('',[Validators.required])
    });

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

  sendVisible() {
    this.visible = false;
  }

  ////modal
  open(content, item) {
    this.user = item;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //click modal
  postAddUser(modal: any, user) {
    console.log(user)
    modal.close('Save click');
  }

  //postDni
  onSubmit(){
    if(this.forma.invalid){
      return;
    }
    
    const {value:{dni}}=this.forma;
    console.log(dni);
    fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhb2xvcGFvbG9jY2NAZ21haWwuY29tIn0.tnyGmt98befjOCSqstiQQu5BTElwmgtI0kauPEOTYA8`).then((data)=>data.json()).then((resp)=>{
      console.log(resp);
      this.forma.setValue({
        'dni':''
      })
    }).catch((err)=>{
      const error:any=new Error();
      error.message='server internal error';
      error.status=500;
      throw error;
    });

  }
}
