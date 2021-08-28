import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePaymentSuccessComponent } from './stripe-payment-success.component';

describe('StripePaymentSuccessComponent', () => {
  let component: StripePaymentSuccessComponent;
  let fixture: ComponentFixture<StripePaymentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripePaymentSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripePaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
