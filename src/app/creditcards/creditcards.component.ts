import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private banksService: BanksService,
    private creditCardsService: CreditcardsService,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        this.banks = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )
    this.updateCards()
  }

  updateCards() {
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

  unifyCards() {
    this.creditCardsService.unifyCreditCards().subscribe(
      (data) => {
        this.updateCards()
        this.toastrService.success('Cartão unificado gerado!')
        this.selectedOption = 'VIRTUAL'
      },
      (error) => {
        this.toastrService.error('Não foi possível unificar seus cartões :(')
        console.log('Erro ao gerar cartão unificado')
        console.log(error)
      }
    )
  }

  hasUnifiedCards() {
    let bankBoxCards = this.cards.filter(card => card.brand === 'BANKBOX')
    console.log(bankBoxCards)
    return bankBoxCards.length > 0
  }

  isBankBoxCard(card: CreditCard) {
    console.log('branch: ' + card.brand)
    return card.brand === 'BANKBOX'
  }
}
