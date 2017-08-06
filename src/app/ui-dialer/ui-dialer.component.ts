import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'ui-dialer',
  templateUrl: './ui-dialer.component.html',
  styleUrls: ['./ui-dialer.component.scss']
})
export class UiDialerComponent implements OnInit {

  @ViewChild('dial_button') dial_button$;
  @ViewChild('hangup_button') hangup_button$;
  
  numbers: Array<string> = ['1','2','3','4','5','6','7','8','9','*','0','#'];
  number_to_dial: string = "";
  is_on_call: boolean = false;
  timer: string = "";
	
  constructor() { }

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
    this.timer = "00.01";
  }

  stopCall() {
    this.is_on_call = false;
    this.timer = "";
  }

}
