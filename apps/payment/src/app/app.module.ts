import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StripePaymentSuccessComponent } from './stripe-payment-success/stripe-payment-success.component';
import { StripePaymentFailComponent } from './stripe-payment-fail/stripe-payment-fail.component';

@NgModule({
  declarations: [AppComponent, StripePaymentSuccessComponent, StripePaymentFailComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
