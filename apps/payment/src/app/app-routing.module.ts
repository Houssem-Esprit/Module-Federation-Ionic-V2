import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StripePaymentFailComponent } from './stripe-payment-fail/stripe-payment-fail.component';
import { StripePaymentSuccessComponent } from './stripe-payment-success/stripe-payment-success.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('../../../../libs/payment/feature/payment/payment/src/lib/payment-feature-payment-payment.module').then((m) => m.PaymentFeaturePaymentPaymentModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'stripe_success',
    component: StripePaymentSuccessComponent
  },

  {
    path: 'stripe_failure',
    component: StripePaymentFailComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
