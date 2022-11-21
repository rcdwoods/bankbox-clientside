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
       let remaining = this.remainingValue.replace(',', '.')
       let valueFromAccount = Number(bank.balance!!) >= Number(remaining) ? remaining : bank.balance
       let transaction = new Transaction(bank.id!!, this.beneficiary?.id!!, "TRANSFERENCE", valueFromAccount)
       this.transactions.push(transaction)
       console.log('remaining ' + remaining + ' e value account ' + Number(valueFromAccount))
       console.log('REMAINING ' + this.formatter.format(Number(remaining) - Number(valueFromAccount)))
       this.remainingValue = String(this.formatter.format(Number(remaining) - Number(valueFromAccount)))
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

  doTransference() {
    this.transferenceService.doTransference(this.transactions).subscribe(
      (data) => {
        this.router.navigateByUrl('')
        this.toastrService.success('Transferência realizada!')
      },
      (error) => this.toastrService.error('Transferência não realizada :(')
    )
  }
}
