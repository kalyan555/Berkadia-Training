import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckBookingComponent } from './truck-booking.component';

describe('TruckBookingComponent', () => {
  let component: TruckBookingComponent;
  let fixture: ComponentFixture<TruckBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
