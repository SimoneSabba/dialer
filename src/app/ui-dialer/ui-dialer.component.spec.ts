import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDialerComponent } from './ui-dialer.component';

describe('UiDialerComponent', () => {
  let component: UiDialerComponent;
  let fixture: ComponentFixture<UiDialerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDialerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDialerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
