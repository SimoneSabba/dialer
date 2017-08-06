import { TestBed, inject } from '@angular/core/testing';
import { TimerService } from './timer.service';
import { Observable } from "rxjs/Rx";

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });
  });

  it('startTimer should return an observable', inject([TimerService], (service: TimerService) => {
    let return_value = service.startTimer();
    expect(return_value instanceof Observable).toBeTruthy();
  }));

  it('should format the time as hh:mm:ss', inject([TimerService], (service: TimerService) => {
    expect(service.formatTime(1)).toEqual('00:00:01');
    expect(service.formatTime(53)).toEqual('00:00:53');
    expect(service.formatTime(2050)).toEqual('00:34:10');
    expect(service.formatTime(3432)).toEqual('00:57:12');
    expect(service.formatTime(6212)).toEqual('01:43:32');
  }));
});
