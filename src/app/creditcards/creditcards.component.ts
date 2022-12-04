import { CreditcardsService } from './../resources/services/creditcards.service';
import { CreditCard } from './../resources/models/CreditCard';
import { BankAccount } from './../resources/models/BankAccount';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.css']
})
export class CreditcardsComponent implements OnInit {

  selectedBank = {};
  selectedOption = 'PHYSICAL';
  banks: BankAccount[] = []
  cards: CreditCard[] = []

  constructor(private banksService: BanksService, private creditCardsService: CreditcardsService) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        this.banks = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )
    this.creditCardsService.getCreditCards().subscribe(
      (data) => this.cards = data.map(creditCard => Object.assign(new CreditCard(), creditCard)),
      (error) => console.log(error)
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
    return this.cards.filter(card => card.type == this.selectedOption)
  }
}
