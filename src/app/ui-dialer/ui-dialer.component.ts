import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'ui-dialer',
  templateUrl: './ui-dialer.component.html',
  styleUrls: ['./ui-dialer.component.scss']
})
export class UiDialerComponent implements OnInit {
  
  numbers: Array<string> = ['1','2','3','4','5','6','7','8','9','*','0','#'];
  number_to_dial: string = "";
  is_on_call: boolean = false;
  timer: string = "";
	
  constructor() { }

  ngOnInit() {}

  onClickNumber(number: string) {
    this.number_to_dial += number;
  }

  onDialClick() {
    this.is_on_call = true;
    this.timer = "00.01";
  }

  onHangUpClick() {
    this.is_on_call = false;
    this.timer = "";
  }

}
