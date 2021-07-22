import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { IonicModule } from '@ionic/angular';
import { PaymentPageRoutingModule } from './payment-routing.module';

export const paymentFeaturePaymentPaymentRoutes: Route[] = [];

@NgModule({
  imports: [IonicModule,CommonModule, RouterModule,PaymentPageRoutingModule],
  declarations: [
    PaymentPageComponent
  ],
})
export class PaymentFeaturePaymentPaymentModule {}
