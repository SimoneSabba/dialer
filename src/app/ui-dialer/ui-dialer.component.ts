import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from "rxjs/Rx";
import { NumbersStoreService } from '../services/numbers-store.service';
import { TimerService } from '../services/timer.service';

import { IPhoneNumber } from '../interfaces/phone-number.interface';


@Component({
  selector: 'ui-dialer',
  templateUrl: './ui-dialer.component.html',
  styleUrls: ['./ui-dialer.component.scss']
})
export class UiDialerComponent implements OnInit {

  @ViewChild('dial_button') dial_button$;
  @ViewChild('hangup_button') hangup_button$;
  
  private MAX_CALL_TIME = 10;
  
  numbers: Array<string> = ['1','2','3','4','5','6','7','8','9','*','0','#'];
  number_to_dial: string = "";
  is_on_call: boolean = false;
  formatted_time: string = "";
  seconds: number = 0;
  timer_sub: Subscription;
	
  constructor(private numbersStore: NumbersStoreService, private timerService: TimerService) { }

  ngOnInit() {
    Observable.fromEvent(this.dial_button$.nativeElement, 'click')
      .subscribe(()=>this.startCall());

    Observable.fromEvent(this.hangup_button$.nativeElement, 'click')
      .subscribe(()=>this.stopCall());

  }

  onClickNumber(number: string) {
    this.number_to_dial += number;
  }

  startCall() {
    this.is_on_call = true;
    this.timer_sub = this.timerService.startTimer().subscribe(
      (timer)=>{
        if (timer <= this.MAX_CALL_TIME) {
          this.updateTime(timer);
        } else 
          this.stopCall();
      }
    );
  }

  updateTime(time: number) {
    this.formatted_time = this.timerService.formatTime(time);
    this.seconds = time;
  }

  stopCall() {
    this.timer_sub.unsubscribe();
    this.is_on_call = false;
    this.numbersStore.add_number(this.number_to_dial, this.seconds);
    this.formatted_time = "";
    this.number_to_dial = "";
    console.log('total call', this.numbersStore.getTotalCall());
    console.log('last 3 calls', this.numbersStore.getMostCalledNumbers(3));
  }

}
