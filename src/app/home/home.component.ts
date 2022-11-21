import { BankAccount } from './../resources/models/BankAccount';
import { BanksService } from './../resources/services/banks.service';
import { BalanceDetails } from './../resources/models/BalanceDetails';
import { CostumerService } from './../resources/services/costumer.service';
import { Component, OnInit } from '@angular/core';
import { Costumer } from '../resources/models/Costumer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  costumer: Costumer = new Costumer()
  balanceDetails?: BalanceDetails
  showBalance = true;
  selectedBank = {};
  cards = [
    {
      brand: 'VISA',
      imgUrl: '../../assets/imgs/cards/visa.png',
      number: '1551'
    },
    {
      brand: 'MASTERCARD',
      imgUrl: '../../assets/imgs/cards/mastercard.png',
      number: '2216'
    },
    {
      brand: 'VISA',
      imgUrl: '../../assets/imgs/cards/visa.png',
      number: '9257'
    }
  ]
  banks?: BankAccount[]

  constructor(private router: Router, private costumerService: CostumerService, private banksService: BanksService) { }

  ngOnInit(): void {
    this.costumer = JSON.parse(localStorage.getItem('auth')!!) as Costumer
    this.banksService.getBanks().subscribe(
      (data) => {
        console.log(data)
        this.banks = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )
    this.costumerService.getBalanceDetails().subscribe(
      (data) => this.balanceDetails = Object.assign(new BalanceDetails(), data),
      (error) => console.log('Erro ao obter balance details')
      )
    if (!this.costumer) this.router.navigateByUrl('')
  }

  toggleShowBalance() {
    this.showBalance = !this.showBalance
  }

  selectBank(bank: BankAccount) {
    let index = this.banks!!.indexOf(bank)
    let lastValue = this.banks!![this.banks!!.length - 1]
    this.banks!![index] = lastValue
    this.banks!![this.banks!!.length - 1] = bank
  }
}
