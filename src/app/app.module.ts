import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiDialerComponent } from './ui-dialer/ui-dialer.component';

import { NumbersStoreService } from './numbers-store.service';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    UiDialerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumbersStoreService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
