import { ToastrService } from 'ngx-toastr';
import { Costumer } from './../resources/models/Costumer';
import { CostumerService } from './../resources/services/costumer.service';
import { BankAccount } from './../resources/models/BankAccount';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenceService } from '../resources/services/transference.service';
import { Transaction } from '../resources/models/Transaction';

@Component({
  selector: 'app-transference-summary',
  templateUrl: './transference-summary.component.html',
  styleUrls: ['./transference-summary.component.css']
})
export class TransferenceSummaryComponent implements OnInit {

  balance = '0'
  formatter = new Intl.NumberFormat('pt-BR')
  remainingValue: string = ''
  transactionTotalValue: string = ''
  transactions: Transaction[] = []
  banks: BankAccount[] = []
  beneficiary?: BankAccount
  costumerBeneficiary?: Costumer

  constructor(private router: Router, private transferenceService: TransferenceService, private costumerService: CostumerService, private toastrService: ToastrService) { }

  ngOnInit(): void {
     this.beneficiary = this.transferenceService.beneficiary
     this.transactionTotalValue = this.transferenceService.transactionTotalValue
     this.remainingValue = this.transactionTotalValue
     this.banks = this.transferenceService.transactionBanks
     this.costumerService.getCostumer(this.beneficiary?.costumer_id!!).subscribe(
       (data) => this.costumerBeneficiary = Object.assign(new Costumer(), data),
       (error) => this.toastrService.error('Beneficiário não encontrado :(')
     )
     this.banks.forEach(bank => {
      console.log('remaining ' + this.remainingValue)
       let valueFromAccount = Number(bank.balance!!) >= Number(this.remainingValue.replace('.','').replace(',', '.')) ? this.remainingValue.replace('.','').replace(',', '.') : bank.balance
       if (bank.id === this.beneficiary!!.id) valueFromAccount = '0'
       let transaction = new Transaction(bank.id!!, this.beneficiary?.id!!, "TRANSFERENCE", new String(valueFromAccount)?.replace('.', ','))
       this.transactions.push(transaction)
       console.log('remaining ' + this.remainingValue + ' e value account ' + Number(valueFromAccount))
       console.log('REMAINING ' + this.formatter.format(Number(this.remainingValue.replace('.','').replace(',', '.')) - Number(valueFromAccount)))
       this.remainingValue = String(this.formatter.format(Number(this.remainingValue.replace('.','').replace(',', '.')) - Number(valueFromAccount)))
     })
  }

  validateIsNumber(event: KeyboardEvent) {
    const pattern = /[0-9,]/
    if (!pattern.test(event.key))
      event.preventDefault()
  }

  getBankName(transaction: Transaction): string {
    return this.banks.filter(bank => bank.id === transaction.source_id)[0].bank?.formatted_name!!
  }

  getTotal() {
    console.log(this.transactions.map(it => Number(it.value)))
    return this.formatter.format(this.transactions.map(it => Number(it.value?.replace(',', '.'))).reduce((acc, value) => Number(acc + value)))
  }

  transferedValueIsCorrect() {
    console.log('total: ' + this.getTotal().replace('.', '').replace(',', '.') + ' transaction: ' + Number(this.transactionTotalValue.replace('.', '').replace(',', '.')))
    return Number(this.getTotal().replace('.', '').replace(',', '.')) === Number(this.transactionTotalValue.replace('.', '').replace(',', '.'))
  }

  doTransference() {
    let validTransactions: Transaction[] = this.transactions
      .filter(it => it.value != '0')
      .map(it => {it.value = it.value?.replace(',', '.'); return it})
    this.transferenceService.doTransference(validTransactions).subscribe(
      (data) => {
        this.router.navigateByUrl('')
        this.toastrService.success('Transferência realizada!')
      },
      (error) => this.toastrService.error('Transferência não realizada :(')
    )
  }

  sourceIsBeneficiary(transaction: Transaction) {
    return transaction.source_id === transaction.beneficiary_id
  }
}
