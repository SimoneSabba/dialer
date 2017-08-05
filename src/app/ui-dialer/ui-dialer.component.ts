import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-dialer',
  templateUrl: './ui-dialer.component.html',
  styleUrls: ['./ui-dialer.component.scss']
})
export class UiDialerComponent implements OnInit {
  
  numbers: Array<string> = ['1','2','3','4','5','6','7','8','9','*','0','#'];
  number_to_dial: string = "";
  is_on_call: boolean = false;
	
  constructor() { }

  ngOnInit() {
  }

  onClickNumber(number: string) {
    this.number_to_dial += number;
  }

  onDialClick() {
    this.is_on_call = true;
  }

  onHangUpClick() {
    this.is_on_call = false;
  }

}
