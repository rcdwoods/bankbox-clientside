import { ToastrService } from 'ngx-toastr';
import { BankAccount } from './../resources/models/BankAccount';
import { Transaction } from './../resources/models/Transaction';
import { Component, OnInit } from '@angular/core';
import { TransferenceService } from '../resources/services/transference.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-transference-value',
  templateUrl: './transference-value.component.html',
  styleUrls: ['./transference-value.component.css']
})
export class TransferenceValueComponent implements OnInit {

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
    return String(balances.reduce((acc, value) => acc + value)).replace('.', ',')
  }

  validateIsMoney(event: KeyboardEvent) {
    console.log()
    console.log(Number(this.value?.replace(',', '.')))
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
      this.router.navigateByUrl("transference-beneficiary", { skipLocationChange: true })
    }
  }

  isValueValid(): boolean {
    return Number(this.value?.replace(',', '.')) > 0
  }

}
