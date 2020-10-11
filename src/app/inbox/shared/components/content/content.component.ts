import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input('feedBackResponse') feedBackResponse: any = null;
  @Output('emitValue') emitValue: EventEmitter<string>;
  forma: FormGroup;
  formaSelect: FormGroup;
  options = [
    { value: '1', name: 'FeedBackId' },
    { value: '2', name: 'Content' },
    { value: '3', name: 'Filter3' },
  ]
  constructor() {
    this.emitValue = new EventEmitter();
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
    console.log(this.forma.value,this.formaSelect.value);
    this.emitValue.emit(this.forma.value.value);
  }

}
