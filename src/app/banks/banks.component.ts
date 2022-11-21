import { BankAccount } from './../resources/models/BankAccount';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  selectedBank = {};
  selectedOption = 'CHECKING';
  banks: BankAccount[] = []

  constructor(private banksService: BanksService) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        this.banks = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )
  }

  selectOption(option: string) {
    this.selectedOption = option
  }

  selectBank(bank: any) {
    let index = this.banks.indexOf(bank)
    let lastValue = this.banks[this.banks.length - 1]
    this.banks[index] = lastValue
    this.banks[this.banks.length - 1] = bank
  }

  getBanksByAccountType() {
    return this.banks.filter(bank => bank.bank_account_type == this.selectedOption)
  }
}
