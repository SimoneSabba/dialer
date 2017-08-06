import { TestBed, inject } from '@angular/core/testing';
import { NumbersStoreService } from './numbers-store.service';

const number_1 = "111";
const number_2 = "222";
const number_3 = "333";
const number_4 = "444";
const number_5 = "555";

describe('NumbersStoreService', () => {
  let a = 1;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbersStoreService]
    });
  });

  it('should add a number if is not present', inject([NumbersStoreService], (service: NumbersStoreService) => {
    let number_to_add = "1112";
    let seconds = 1;
    expect(service.getAllCalls().length).toBe(0);
    service.add_number(number_to_add, seconds);
    expect(service.getAllCalls().length).toBe(1);
    expect(service.getAllCalls()[0].number).toBe(number_to_add);
    service.add_number(number_to_add, seconds);
    expect(service.getAllCalls().length).toBe(1);
    expect(service.getAllCalls()[0].number).toBe(number_to_add);
  }));

  it('should update a number if is already present', inject([NumbersStoreService], (service: NumbersStoreService) => {
    let number_to_add = "12345";
    let seconds_first_call = 3;
    let seconds_second_call = 5;

    service.add_number(number_to_add, seconds_first_call);
    expect(service.getAllCalls()[0].number).toBe(number_to_add);
    expect(service.getAllCalls()[0].count).toBe(1);
    service.add_number(number_to_add, seconds_second_call);
    expect(service.getAllCalls()[0].count).toBe(2);
    expect(service.getAllCalls()[0].total_seconds).toBe(seconds_first_call + seconds_second_call);
    
  }));

  it('should return the total number of calls', inject([NumbersStoreService], (service: NumbersStoreService) => {
    
    service.add_number('111', 1);
    expect(service.getTotalCall()).toBe(1);
    service.add_number('222', 3);
    expect(service.getTotalCall()).toBe(2);
    service.add_number('111', 10);
    expect(service.getTotalCall()).toBe(3);

  }));

  it('should return the most called numbers sorted by call count', inject([NumbersStoreService], (service: NumbersStoreService) => {

    // number_2 --- 3 calls --- 45 sec
    service.add_number(number_2, 15);
    service.add_number(number_2, 15);
    service.add_number(number_2, 15);
    
    // number_1 --- 2 calls --- 56 sec
    service.add_number(number_1, 40);
    service.add_number(number_1, 16);

    // number_5 --- 2 calls --- 48 sec
    service.add_number(number_5, 18);
    service.add_number(number_5, 30);

    // number_3 --- 1 calls --- 10 sec
    service.add_number(number_3, 10);
    
    // number_4 --- 1 calls --- 18 sec
    service.add_number(number_4, 18);

    let most_three_calls = service.getMostCalledNumbers(3);
    expect(most_three_calls instanceof Array).toBeTruthy();
    expect(most_three_calls.length).toBe(3);

    // number_2 --- 3 calls --- 45 sec
    expect(most_three_calls[0].number).toBe(number_2);
    expect(most_three_calls[0].total_seconds).toBe(45);
    expect(most_three_calls[0].count).toBe(3);

    // number_1 --- 2 calls --- 56 sec
    expect(most_three_calls[1].number).toBe(number_1);
    expect(most_three_calls[1].total_seconds).toBe(56);
    expect(most_three_calls[1].count).toBe(2);

    // number_5 --- 2 calls --- 48 sec
    expect(most_three_calls[2].number).toBe(number_5);
    expect(most_three_calls[2].total_seconds).toBe(48);
    expect(most_three_calls[2].count).toBe(2);
  }));

});
