import { Transaction } from './../resources/models/Transaction';
import { LoginService } from './../resources/services/login.service';
import { BankAccountBasic } from './../resources/models/BankAccountBasic';
import { TransferenceService } from './../resources/services/transference.service';
import { DateTransaction } from './../resources/models/DateTransaction';
import { BalanceDetails } from './../resources/models/BalanceDetails';
import { CostumerService } from './../resources/services/costumer.service';
import { BankAccount } from './../resources/models/BankAccount';
import { Bank } from './../resources/models/Bank';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  month?: {name: string, code: string}[] = [{name: 'Novembro', code: '2022-11'}]
  bank: Bank[] = [{formatted_name: 'Todos', name: 'ALL'}]
  banks: Bank[] = [{formatted_name: 'Todos', name: 'ALL'}]
  months = [
    {name: 'Dezembro', code: '2022-12'},
    {name: 'Novembro', code: '2022-11'}
  ]
  customerBanks: BankAccount[] = []
  balanceDetails?: BalanceDetails;
  dateTransactions?: DateTransaction[]

  constructor(
    private loginService: LoginService,
    private banksService: BanksService,
    private costumerService: CostumerService,
    private transferenceService: TransferenceService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        this.customerBanks = data.map(bank => Object.assign(new BankAccount(), bank))
        this.customerBanks.forEach(bankAccount => this.banks?.push(bankAccount.bank!!))
      }
    )
    this.costumerService.getBalanceDetails().subscribe(
      (data) => this.balanceDetails = Object.assign(new BalanceDetails(), data)
    )
    this.transferenceService.getTransactions().subscribe(
      (data) => {
        this.dateTransactions = data.map(dateTransaction => Object.assign(new DateTransaction, dateTransaction))
        console.log(this.dateTransactions)
      }
    )
  }

  formattedType(transaction: Transaction) {
    if (transaction.type === 'TRANSFERENCE') return 'Transfer??ncia'
    return 'Pix'
  }

  getValueFormatted(transaction: Transaction) {
    let symbol = transaction.flow === 'INBOUND' ? '+' : '-'
    let value = new String(transaction.value!!)
    return `${symbol} R$ ${value?.replace('.', ',')}`
  }

  getFormattedHours(transaction: Transaction) {
    console.log(transaction.performed_at)
    return this.datePipe.transform(transaction.performed_at, 'HH:mm')
  }

  getBank(transaction: Transaction) {
    if (transaction.flow === 'INBOUND') return transaction.beneficiary?.bank
    return transaction.source?.bank
  }

  getAccount(transaction: Transaction) {
    if (transaction.flow === 'INBOUND') return transaction.beneficiary?.account
    return transaction.source?.account
  }
}
