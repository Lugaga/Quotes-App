import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  public quote: Quote = new Quote(0, ' ', ' ', ' ', 0, 0, 0, false);
  @Output() isComplete = new EventEmitter<Quote>();
  constructor() {
  }
  sendsOutput() {
    if (!(this.quote.quote == ' ') && !(this.quote.author == ' ') && !(this.quote.publisher == ' ')) {
      this.isComplete.emit(this.quote);
    }
    else {
      alert("Sorry ,All fields are required!!")
    }
    this.quote = new Quote(0, ' ', ' ', ' ', 0, 0, 0, false);
  }
  ngOnInit() {
  }

}
