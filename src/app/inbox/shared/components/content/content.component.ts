import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Cropper from "cropperjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges,AfterViewInit {
  @Input('feedBackResponse') feedBackResponse: any = null;
  @Output('emitValue') emitValue: EventEmitter<string>;
  forma: FormGroup;
  formaSelect: FormGroup;
  options = [
    { value: '1', name: 'FeedBackId' },
    { value: '2', name: 'Content' },
    { value: '3', name: 'Filter3' },
  ]
  ///////
  @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    public imageDestination: string;
    private cropper: Cropper;

    
  constructor() {
    this.emitValue = new EventEmitter();
    this.imageDestination = "";
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['feedBackResponse'].previousValue !== changes['feedBackResponse'].currentValue) {
      console.log('entro');
      let main = document.getElementById('id-main');
      let image = document.getElementById('id-image');
      if (main) {
        main.animate([
          // keyframes
          { opacity: 0 },
          { opacity: 1 }
        ], {
          // timing options
          duration: 1000,
          iterations: 1
        });
      };
      if (image) {
        image.animate([
          // keyframes
          { opacity: 0 },
          { opacity: 1 }
        ], {
          // timing options
          duration: 1000,
          iterations: 1
        });
      };
    }
  }

  ngOnInit(): void {
    this.formaSelect = new FormGroup({
      'option': new FormControl(this.options[0])
    });
    this.forma = new FormGroup({
      'value': new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.forma.invalid) {
      console.log('Form invalid');
      return;
    }
    console.log(this.forma.value, this.formaSelect.value);
    this.emitValue.emit(this.forma.value.value);
  }

  download_img(imageURI) {
    // get image URI from canvas object
    let download: any = document.getElementById("download");
    download.href = imageURI;
  }

  ////////////////////////
  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1,
        crop: () => {
            const canvas = this.cropper.getCroppedCanvas();
            this.imageDestination = canvas.toDataURL("image/png");
        }
    });
}



}
