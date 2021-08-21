import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionPageComponent } from './create-transaction-page/create-transaction-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionPageComponent,
  },
  {
    path: 'create',
    component: CreateTransactionPageComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionPageRoutingModule {}
