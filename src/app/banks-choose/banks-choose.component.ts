import { BankAccount } from './../resources/models/BankAccount';
import { Bank } from './../resources/models/Bank';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banks-choose',
  templateUrl: './banks-choose.component.html',
  styleUrls: ['./banks-choose.component.css']
})
export class BanksChooseComponent implements OnInit {

  banks: Bank[] = [
    {
      name: 'BRADESCO',
      formatted_name: 'Bradesco',
      img_url: '../../assets/imgs/banks/bradesco.png'
    },
    {
      name: 'ITAU',
      formatted_name: 'Itaú Unibanco',
      img_url: '../../assets/imgs/banks/itau.png',
    },
    {
      name: 'NUBANK',
      formatted_name: 'Nubank',
      img_url: '../../assets/imgs/banks/nubank.png',
    },
    {
      name: 'SANTANDER',
      formatted_name: 'Santander',
      img_url: '../../assets/imgs/banks/santander.png',
    },
  ]

  constructor(private banksService: BanksService, private router: Router) { }

  ngOnInit(): void {
  }

  chooseBank(bank: Bank) {
    let bankAccount = new BankAccount()
    bankAccount.bank = bank
    this.banksService.selectedBank = this.banksService.selectedBank = bankAccount
    this.router.navigateByUrl('confirm-bank')
  }
}
