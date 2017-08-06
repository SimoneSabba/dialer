import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { IPhoneNumber } from './interfaces/phone-number.interface';

@Injectable()
export class NumbersStoreService {

  private calls: Array<IPhoneNumber> = [];

  // PUBLIC METHODS

  add_number(number_to_add: string, seconds: number) {
    let number = this.exist(number_to_add);
    if (number) {
      this.update(number, seconds);
    } else {
      this.add(number_to_add, seconds);
    }

    this.calls = this.sort().reverse();
  }

  getTotalCall() {
    return _.sumBy(this.calls, 'count');
  }

  getMostCalledNumbers(number_of_calls: number) {
    return _.take(this.calls, number_of_calls);
  }

  // PRIVATE METHODS

  private exist(number: string) {
    return _.find(this.calls,{number: number});
  }

  private update(number_to_update: IPhoneNumber, seconds: number) {
      number_to_update.count++;
      number_to_update.total_seconds += seconds;
  }

  private add(number_to_add: string, seconds: number) {
    this.calls.push({number: number_to_add, count: 1, total_seconds: seconds});
  }

  private sort() {
    return _.sortBy(this.calls, ['count', 'total_seconds']);
  }

  private reverse() {
    return _.reverse(this.calls);
  }

}
 