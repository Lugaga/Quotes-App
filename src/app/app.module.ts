import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HightlightDirective } from './hightlight.directive';
import { FormComponentComponent } from './form-component/form-component.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimestampPipe } from './timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    FormComponentComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    TimestampPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
