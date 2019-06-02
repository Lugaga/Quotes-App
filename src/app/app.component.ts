import { Component, OnDestroy } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ids: number = 0;
  timer: number;
  title = 'app';
  quotes: Quote[] = [];
  addPost(quote: Quote) {
    quote.id = this.ids;
    if (!(quote.publisher == '') || !(quote.author == '') || !(quote.quote == '')) {
      let counter = 0;
      this.timer = setInterval(() => {
        quote.time = counter += 1;
        // console.log(counter);
      }, 1000);
      this.quotes.push(quote);
      this.ids += 1;
    }
    this.getHighestQuote(true)
  }
  getHighestQuote(changed: boolean): void {
    let highest: any[] = [0, 0]
    if (changed) {
      for (let quote of this.quotes) {
        if (quote.upvotes > highest[1]) {
          highest[1] = quote.upvotes;
          highest[0] = quote;
        }
      }
    }
    this.highlightExcept(highest[0]);
  }
  highlightExcept(except: Quote) {
    for (let quote of this.quotes) {
      if (except.id != quote.id) {
        quote.highest = false;
      }
      else {
        except.highest = true;
      }
    }
  }
  deleteComponent(status: boolean, index: number) {
    if (status) {
      let state = confirm("Are you sure,You would like to delete this quote?");
      if (state) {
        this.quotes.splice(index, 1);
      }
    }
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
