import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from './transaction.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'accept': 'application/json'
  });

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'https://szxs1ttcu9.execute-api.us-east-1.amazonaws.com/api/transfers'
  constructor(private httpClient: HttpClient) { }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.baseUrl, transaction, {headers});
  }
  
  getAllTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.baseUrl,{headers}).pipe(
      tap( transaction => console.log('transaction : ', transaction))
    );
  }
}
