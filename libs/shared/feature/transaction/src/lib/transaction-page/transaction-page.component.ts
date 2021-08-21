import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TransactionService} from '@module-federation-ionic/shared/data-access/transaction'
import {Transaction} from '@module-federation-ionic/shared/data-access/transaction'

@Component({
  selector: 'module-federation-ionic-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionService:TransactionService,private router: Router) {'' }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(transactions => this.transactions = transactions);
  }

  createTransaction():void {
    this.router.navigate(['/transaction/create']);

  }
}
