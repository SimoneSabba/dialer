import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiDialerComponent } from './ui-dialer/ui-dialer.component';

@NgModule({
  declarations: [
    AppComponent,
    UiDialerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
