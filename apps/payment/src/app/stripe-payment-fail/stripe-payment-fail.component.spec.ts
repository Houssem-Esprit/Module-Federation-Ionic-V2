import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePaymentFailComponent } from './stripe-payment-fail.component';

describe('StripePaymentFailComponent', () => {
  let component: StripePaymentFailComponent;
  let fixture: ComponentFixture<StripePaymentFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripePaymentFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripePaymentFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
