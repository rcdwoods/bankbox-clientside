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
  checkingBalance = 'R$ 0,00'
  savingsBalance = 'R$ 13,24'
  showBalance = true;
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
  banks = [
    {
      name: 'ITAU',
      accountType: 'Conta corrente',
      agency: '0134',
      accountNumber: '1242-3',
      balance: 'R$ 13,24'
    },
    {
      name: 'BRADESCO',
      accountType: 'Conta corrente',
      agency: '1567',
      account: '7759-2',
      balance: 'R$ 100,00'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.costumer = JSON.parse(localStorage.getItem('auth')!!) as Costumer
    if (!this.costumer) this.router.navigateByUrl('')
  }

  toggleShowBalance() {
    this.showBalance = !this.showBalance;
  }

}
