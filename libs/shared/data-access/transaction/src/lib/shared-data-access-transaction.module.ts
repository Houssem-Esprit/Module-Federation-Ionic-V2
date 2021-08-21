import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './transaction.service';

@NgModule({
  imports: [CommonModule],
  providers: [TransactionService]
})
export class SharedDataAccessTransactionModule {}
