import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class TimerService {

  constructor() { }

  startTimer() {
    return Observable.timer(0, 1000);
  }

  formatTime(ticks: number) {
    let divider = ':';
    return this.getHours(ticks) + divider + this.getMinutes(ticks) + divider + this.getSeconds(ticks);
  }

  protected getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) { 
      return digit <= 9 ? '0' + digit : digit;
  }


}
