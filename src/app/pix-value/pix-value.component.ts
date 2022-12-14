import { ToastrService } from 'ngx-toastr';
import { BankAccount } from './../resources/models/BankAccount';
import { Transaction } from './../resources/models/Transaction';
import { Component, OnInit } from '@angular/core';
import { TransferenceService } from '../resources/services/transference.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pix-value',
  templateUrl: './pix-value.component.html',
  styleUrls: ['./pix-value.component.css']
})
export class PixValueComponent implements OnInit {

  formatter = new Intl.NumberFormat('pt-BR')
  transactions: Transaction[] = []
  banks: BankAccount[] = []
  value: string = ""

  constructor(private transferenceService: TransferenceService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.banks = this.transferenceService.transactionBanks;
    this.transactions = this.transferenceService.currentTransactions;
    if (this.banks.length === 0) this.router.navigateByUrl('transference')
  }

  getAvailableBalance() {
    let balances = this.banks.map(bank => Number(bank.balance))
    return String(balances.reduce((acc, value) => Number(this.formatter.format(acc + value).replace('.', '').replace(',', '.')))).replace('.', ',')
  }

  validateIsMoney(event: KeyboardEvent) {
    const pattern = /[0-9,]/
    if (!pattern.test(event.key))
      event.preventDefault()
  }

  setValue() {
    let availableBalance = this.getAvailableBalance().replace(',', '.')
    let value = this.value.replace(',', '.')
    if (Number(value) > Number(availableBalance)) {
      this.toastrService.error('Saldo insuficiente :(')
    } else {
      this.transferenceService.setValue(this.value!!)
      this.router.navigateByUrl("pix-beneficiary", { skipLocationChange: true })
    }
  }

  isValueValid(): boolean {
    return Number(this.value?.replace(',', '.')) > 0
  }

  hasEnoughBalance(): boolean {
    let availableBalance = this.getAvailableBalance().replace(',', '.')
    return Number(this.value?.replace(',', '.')) <= Number(availableBalance)
  }

}
