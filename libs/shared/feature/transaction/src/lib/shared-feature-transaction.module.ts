import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TransactionPageRoutingModule } from './transaction-routing.module';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CreateTransactionPageComponent } from './create-transaction-page/create-transaction-page.component';
import {SharedDataAccessTransactionModule} from '@module-federation-ionic/shared/data-access/transaction'
import {TransactionService} from '@module-federation-ionic/shared/data-access/transaction'

export const sharedFeatureTransactionRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule,IonicModule, HttpClientModule, TransactionPageRoutingModule, SharedDataAccessTransactionModule],
  declarations: [
    TransactionPageComponent,
    CreateTransactionPageComponent
  ],
  providers: [TransactionService],
  exports: [
    TransactionPageComponent,
    CreateTransactionPageComponent
  ],
})
export class SharedFeatureTransactionModule {}
