import { TransferenceService } from './../resources/services/transference.service';
import { BalanceDetails } from './../resources/models/BalanceDetails';
import { CostumerService } from './../resources/services/costumer.service';
import { BanksService } from './../resources/services/banks.service';
import { BankAccount } from './../resources/models/BankAccount';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transference-select',
  templateUrl: './transference-select.component.html',
  styleUrls: ['./transference-select.component.css']
})
export class TransferenceSelectComponent implements OnInit {

  banks: BankAccount[] = []
  balanceDetails: BalanceDetails = new BalanceDetails()

  constructor(
    private banksService: BanksService,
    private costumerService: CostumerService,
    private transferenceService: TransferenceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        console.log(data)
        this.banks = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )

    this.costumerService.getBalanceDetails().subscribe(
      (data) => {
        this.balanceDetails = Object.assign(new BalanceDetails, data)
      },
      (erro) => console.log('Erro ao obter bancos')
    )
  }

  getBanksByAccountType(type: string) {
    return this.banks.filter(bank => bank.bank_account_type === type)
  }

  initTransaction(from: BankAccount[]) {
    this.transferenceService.initTransaction(from)
    this.router.navigateByUrl('transference-value', { skipLocationChange: true })
  }

  getBankNames() {
    if ( this.banks.length == 0) return ''
    if (this.banks.length == 1) return this.banks[0].bank?.formatted_name
    let formattedNames = new String(this.banks.map(bank => bank.bank?.formatted_name))
    return formattedNames.split(',').join(', ')
  }
}
