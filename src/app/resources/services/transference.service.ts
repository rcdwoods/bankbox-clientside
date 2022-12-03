import { DateTransaction } from './../models/DateTransaction';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { BankAccount } from './../models/BankAccount';
import { Transaction } from './../models/Transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  beneficiary?: BankAccount;
  currentTransactions: Transaction[] = []
  transactionBanks: BankAccount[] = []
  transactionTotalValue = "0"

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  initTransaction(from: BankAccount[]) {
    this.transactionBanks = []
    this.currentTransactions = []
    from.forEach(bank => {
      console.log('from bank ' + bank.bank?.name)
      this.transactionBanks.push(bank)
      let transaction = new Transaction()
      transaction!!.source_id = bank.id
      this.currentTransactions?.push(transaction)
    })
  }

  setValue(value: string) {
    this.transactionTotalValue = value
  }

  getBeneficiary(bank: string, agency: string, account: string): Observable<BankAccount[]> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<BankAccount[]>(`https://api.bankbox.com.br/v1/bank_accounts?bank=${bank}&agency=${agency}&account=${account}`, { headers })
  }

  doTransference(transactions: Transaction[]) {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.post<void>('https://api.bankbox.com.br/v1/transactions', transactions, { headers })
  }

  getTransactions(): Observable<DateTransaction[]> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<DateTransaction[]>(`https://api.bankbox.com.br/v1/transactions?costumer_id=${user.id}`, { headers })
  }
}
